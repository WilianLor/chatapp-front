import { useState, useEffect, ChangeEvent } from "react";
import { useHistory } from "react-router";
import { io, Socket } from "socket.io-client";
import axios, { AxiosResponse } from "axios";
import {
  HomeMainContent,
  Text,
  UserHeaderContainer,
  TextsContainer,
  ListHeader,
  List,
  ChatHeader,
  ChatInput,
  Nav,
  IconButton,
  NavContainer,
  MessageInput,
  SendButton,
  EmailText,
  TextsContent,
  UserContent,
  UserIcon,
  UserName,
  ChatBackContent,
  SearchUserComponent,
  UsersList,
  SearchUserInput,
  Page,
  PaginateButton,
  PaginateContainer,
  HoldWarningContainer,
  WarningText,
} from "./styles";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Body from "../../components/Body";
import Modal from "../../components/Modal";
import UserList from "../../components/UserList";
import ChatContent from "../../components/ChatContent";
import ChatRequestComponent from "../../components/ChatRequest";
import UserSearch from "../../components/UserSearch";

import { IoMdSend } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowUp, FaArrowLeft } from "react-icons/fa";

import colors from "../../styles/colors";
import {
  Room,
  User,
  ChatRequest,
  MessageInterface,
  RoomsWithMessages,
  Listener,
  OnlineChat,
} from "./types";
import useData from "../../hooks/useData";
import Toast from "../../components/Toast";

const { REACT_APP_API_BASE_URL } = process.env;

const HomePage = () => {
  const history = useHistory();
  const { userData, logOut } = useData();

  const [socket, setSocket] = useState<Socket | null>();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isChatDeleteModalOpen, setChatDeleteModalOpen] =
    useState<boolean>(false);
  const [messageInput, setMessageInput] = useState<string>("");
  const [search, setSearch] = useState<string>();
  const [activeSearchPage, setActiveSearchPage] = useState<number>(1);
  const [limitPage, setLimitPage] = useState<number>();
  const [usersSearch, setUsersSearch] = useState<User[]>();
  const [activeNav, setActiveNav] = useState<"chat" | "addChats">("chat");
  const [chatRequest, setChatsRequest] = useState<ChatRequest[]>();
  const [activeRoom, setActiveRoom] = useState<Room>();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [checkScroll, updateScroll] = useState<boolean>();
  const [onlineChats, setOnlineChats] = useState<OnlineChat[]>([]);

  useEffect(() => {
    setSocket(
      io(`${REACT_APP_API_BASE_URL}`, {
        extraHeaders: { Authorization: `Bearer ${userData.token}` },
      })
    );
  }, [userData]);

  useEffect(() => {
    let element = document.getElementById("chat-content");

    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [checkScroll]);

  useEffect(() => {
    if (!socket) return;

    socket.on("userDisconnect", ({ chatId }: { chatId: string }) => {
      setOnlineChats((oldOnlineChats) => {
        const filtredOnlineChats = oldOnlineChats.filter(
          (chat) => chat.chatId !== chatId
        );

        console.log("user disconnected");

        return filtredOnlineChats;
      });
    });

    socket.on("userOnline", ({ chatId }: { chatId: string }) => {
      setOnlineChats((oldOnlineChats) => [...oldOnlineChats, { chatId }]);
    });

    socket.on(
      "userOnlineVerify",
      ({ chatId, userId }: { chatId: string; userId: string }) => {
        setOnlineChats((oldOnlineChats) => [...oldOnlineChats, { chatId }]);
        socket.emit("userAlreadyOnline", { chatId, userId });
      }
    );

    socket.on("removeChat", ({ chatId }: { chatId: string }) => {
      let activeRoomId: string | undefined;

      setActiveRoom((activeRoom) => {
        activeRoomId = activeRoom?._id;
        return activeRoom;
      });

      if (activeRoomId === chatId) {
        setActiveRoom(undefined);
      }

      setMessages((oldMessages) => {
        const filtredMessages = oldMessages.filter(
          (message) => message.chatId !== chatId
        );

        return filtredMessages;
      });

      setRooms((oldRooms) => {
        const filtredRooms = oldRooms.filter((room) => room._id !== chatId);

        return filtredRooms;
      });

      return Toast(`Um usuário apagou a conversa com você!`, false);
    });

    socket.on("lastMessagesReaded", ({ chatId }: { chatId: string }) => {
      setMessages((oldMessages) => {
        const messagesUpdated = oldMessages.map((message) => {
          if (message.chatId === chatId && message.author === userData.id) {
            message.readed = true;
            return message;
          } else {
            return message;
          }
        });

        return messagesUpdated;
      });
    });

    socket.on("newChat", ({ chat }: { chat: Room }) => {
      setRooms((oldRooms) => [...oldRooms, chat]);

      socket.emit("getUsersOnline");
    });

    socket.on("message", ({ content, chatId, userId }: Listener) => {
      let activeRoomId: string | undefined;

      setActiveRoom((activeRoom) => {
        activeRoomId = activeRoom?._id;
        return activeRoom;
      });

      if (userId !== userData.id && activeRoomId === chatId) {
        socket.emit("readAllLastMessages", {
          chatId,
          userId,
        });
      }

      const messageData = {
        _id: Math.ceil(Math.random() * 10000).toString(),
        author: userId,
        chatId,
        content,
        readed: userId !== userData.id && activeRoomId === chatId,
        date: new Date(Date.now()).toString(),
      };

      setMessages((oldMessages) => [...oldMessages, messageData]);
      updateScroll((oldState) => !oldState);
    });

    socket.on("newChatRequest", () => {
      axios
        .get(`${REACT_APP_API_BASE_URL}user/request/getall`, {
          headers: { authorization: "Bearer " + userData.token },
        })
        .then((response: AxiosResponse) => {
          setChatsRequest(response.data.chatsRequests);
        });
    });
  }, [socket, userData]);

  useEffect(() => {
    if (!socket) return;

    if (activeNav === "addChats") {
      axios
        .get(`${REACT_APP_API_BASE_URL}user/request/getall`, {
          headers: { authorization: "Bearer " + userData.token },
        })
        .then((response: AxiosResponse) => {
          setChatsRequest(response.data.chatsRequests);
        });
    } else if (activeNav === "chat") {
      axios
        .get(`${REACT_APP_API_BASE_URL}user/chat/getall`, {
          headers: { authorization: "Bearer " + userData.token },
        })
        .then((response: AxiosResponse) => {
          const chats: Room[] = [];
          const messages: MessageInterface[] = [];

          response.data.chats.forEach((chat: RoomsWithMessages) => {
            const chatMessages = chat.messages;

            const otherUser = chat.users.find(
              (user) => user._id !== userData.id
            );

            if (otherUser) {
              const chatData = {
                _id: chat._id,
                user: otherUser,
              };

              chatMessages.forEach((message) => messages.push(message));
              chats.push(chatData);
            }
          });

          setRooms(chats);
          setMessages(messages);
        });
      socket.emit("getUsersOnline");
    }
  }, [activeNav, socket, userData]);

  useEffect(() => {
    if (search) {
      axios
        .get(`${REACT_APP_API_BASE_URL}users`, {
          headers: { authorization: "Bearer " + userData.token },
          params: {
            page: activeSearchPage,
            limit: 10,
            search,
          },
        })
        .then((response) => {
          setUsersSearch(response.data.users);
          setLimitPage(response.data.totalOfPages);
        });
    } else {
      setUsersSearch(undefined);
    }
  }, [search, activeSearchPage, userData]);

  const onClose = () => {
    setModalOpen(false);
  };

  const onDeleteModalClose = () => {
    setChatDeleteModalOpen(false);
  };

  const sendMessage = () => {
    if (!socket) return;
    const content = messageInput;

    if (content) {
      socket.emit("sendMessage", {
        content,
        chatId: activeRoom?._id,
      });

      setMessageInput("");
    }
  };

  const setInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageInput(event.target.value);
  };

  const selectNav = (name: "addChats" | "chat") => {
    if (name === "addChats") {
      setActiveRoom(undefined);
    }
    setActiveNav(name);
  };

  const selectRoom = (roomId: string) => {
    if (!socket) return;
    const room = rooms?.find((room) => room._id === roomId);

    if (!room) {
      return;
    }

    socket.emit("readAllLastMessages", {
      chatId: roomId,
      userId: room.user._id,
    });

    setMessages((oldMessages) => {
      const messagesUpdated = oldMessages.map((message) => {
        if (message.chatId === roomId && message.author !== userData.id) {
          message.readed = true;
          return message;
        } else {
          return message;
        }
      });

      return messagesUpdated;
    });

    setActiveRoom(room);
    updateScroll(!checkScroll);
  };

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const handleChangePage = (page: number) => {
    setActiveSearchPage(page);
  };

  const handleLogout = () => {
    if (!socket) return;
    logOut();
    socket.disconnect();
    return history.push("/");
  };

  const handleDeleteChat = () => {
    if (!socket) return;
    let activeRoomData: Room | undefined;

    setActiveRoom((activeRoom) => {
      activeRoomData = activeRoom;
      return activeRoom;
    });

    axios
      .put(
        `${REACT_APP_API_BASE_URL}user/chat/delete`,
        {
          chatId: activeRoomData?._id,
        },
        {
          headers: { authorization: "Bearer " + userData.token },
        }
      )
      .then((response: AxiosResponse) => {
        if (response.data.status === "error") {
          return Toast(response.data.message, false);
        } else {
          if (activeRoomData === undefined) {
            return Toast("Não há nenhum CHAT ativo para ser removido!", false);
          }

          setActiveRoom(undefined);

          socket.emit("chatDeleted", {
            chatId: activeRoomData?._id,
            userId: activeRoomData?.user._id,
          });

          setMessages((oldMessages) => {
            const filtredMessages = oldMessages.filter(
              (message) => message.chatId !== activeRoomData?._id
            );

            return filtredMessages;
          });

          setRooms((oldRooms) => {
            const filtredRooms = oldRooms.filter(
              (room) => room._id !== activeRoomData?._id
            );

            return filtredRooms;
          });

          return Toast(response.data.message, true);
        }
      })
      .catch(() => {
        return Toast("Erro interno!", false);
      });

    onDeleteModalClose();
  };

  const handleConfirmChatRequest = (requestId: string) => {
    if (!socket) return;

    axios
      .put(
        `${REACT_APP_API_BASE_URL}user/request/action`,
        { requestId: requestId, action: "confirm" },
        {
          headers: { authorization: "Bearer " + userData.token },
        }
      )
      .then((response: AxiosResponse) => {
        if (response.data.status === "error") {
          return Toast(response.data.message, false);
        } else {
          setChatsRequest((oldChatsRequest) => {
            const filtredChatsRequest = oldChatsRequest?.filter(
              (request) => request._id !== requestId
            );

            return filtredChatsRequest;
          });
          socket.emit("createNewChat", { chatId: response.data.chatId });
          return Toast(response.data.message, true);
        }
      });
  };

  const handleDeclineChatRequest = (requestId: string) => {
    axios
      .put(
        `${REACT_APP_API_BASE_URL}user/request/action`,
        { requestId: requestId, action: "decline" },
        {
          headers: { authorization: "Bearer " + userData.token },
        }
      )
      .then((response: AxiosResponse) => {
        if (response.data.status === "error") {
          return Toast(response.data.message, false);
        } else {
          setChatsRequest(
            chatRequest?.filter((request) => request._id !== requestId)
          );
          return Toast(response.data.message, true);
        }
      });
  };

  const handleSendChatRequest = (userId: string) => {
    if (!socket) return;

    axios
      .post(
        `${REACT_APP_API_BASE_URL}user/request/send`,
        { id: userId },
        { headers: { authorization: "Bearer " + userData.token } }
      )
      .then((response: AxiosResponse) => {
        if (response.data.status === "error") {
          return Toast(response.data.message, false);
        } else {
          socket.emit("createNewChatRequest", { userId });
          return Toast(response.data.message, true);
        }
      });
  };

  return (
    <Body>
      <Header>
        <UserHeaderContainer>
          <TextsContainer>
            <Text>{userData.name}</Text>
            <Text>{userData.email}</Text>
          </TextsContainer>
          <Button
            text="Sair"
            styleType="outlined"
            onClick={() => setModalOpen(true)}
          />
        </UserHeaderContainer>
      </Header>
      <HomeMainContent>
        <ListHeader>
          <NavContainer>
            <Nav
              id={activeNav === "chat" ? "active" : "inactive"}
              onClick={() => selectNav("chat")}
            >
              Conversas
            </Nav>
            <Nav
              id={activeNav === "addChats" ? "active" : "inactive"}
              onClick={() => selectNav("addChats")}
            >
              Encontrar pessoas
            </Nav>
          </NavContainer>
        </ListHeader>
        {activeNav === "chat" ? (
          <>
            {" "}
            <List>
              {rooms?.map((room, index) => {
                if (!room.user) {
                  return "";
                }

                const chatMessages = messages?.filter(
                  (message) => message.chatId === room._id
                );

                return (
                  <UserList
                    name={room.user.name}
                    unreadedMessages={
                      messages.filter(
                        (message) =>
                          message.author !== userData.id &&
                          message.readed === false
                      ).length
                    }
                    isOnline={
                      onlineChats.find((chat) => chat.chatId === room._id) !==
                      undefined
                    }
                    key={index}
                    lastMessage={() => {
                      if (chatMessages && chatMessages.length > 0) {
                        const lastMessage =
                          chatMessages[chatMessages.length - 1];

                        const isAuthor = lastMessage.author === userData.id;
                        return `${isAuthor ? "Você:" : "Ele:"} ${
                          lastMessage.content
                        }`;
                      } else {
                        return "Mande uma mensagem";
                      }
                    }}
                    lastMessageDate={() => {
                      if (chatMessages && chatMessages.length > 0) {
                        const lastMessage =
                          chatMessages[chatMessages.length - 1];
                        return lastMessage.date;
                      } else {
                        return "";
                      }
                    }}
                    onClick={() => selectRoom(room._id)}
                    id={activeRoom?._id === room._id ? "active" : "#"}
                  />
                );
              })}
            </List>
            <ChatHeader>
              {activeRoom && (
                <>
                  <UserContent>
                    <UserIcon
                      className={
                        onlineChats.find(
                          (chat) => chat.chatId === activeRoom._id
                        ) !== undefined
                          ? "online"
                          : "offline"
                      }
                    />
                    <TextsContent>
                      <UserName>{activeRoom.user.name}</UserName>
                      <EmailText>{activeRoom.user.email}</EmailText>
                    </TextsContent>
                  </UserContent>
                  <IconButton onClick={() => setChatDeleteModalOpen(true)}>
                    <BsFillTrashFill
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                      }}
                    />
                  </IconButton>
                </>
              )}
            </ChatHeader>
            {activeRoom ? (
              <>
                <ChatContent
                  messages={
                    messages?.filter(
                      (message) => message.chatId === activeRoom._id
                    )
                      ? messages?.filter(
                          (message) => message.chatId === activeRoom._id
                        )
                      : []
                  }
                  myId={userData.id}
                />

                <ChatInput onSubmit={(event) => event.preventDefault()}>
                  <MessageInput
                    placeholder="Digite a mensagem."
                    type="text"
                    onChange={setInputValue}
                    value={messageInput}
                  />
                  <SendButton type="submit" onClick={sendMessage}>
                    <IoMdSend
                      style={{
                        width: "1.75rem",
                        height: "1.75rem",
                      }}
                    />
                  </SendButton>
                </ChatInput>
              </>
            ) : (
              <ChatBackContent>
                <HoldWarningContainer>
                  <FaArrowLeft style={{ fontSize: "2.5rem" }} />
                  <WarningText>
                    Escolha um chat á esquerda para conversa!
                  </WarningText>
                </HoldWarningContainer>
              </ChatBackContent>
            )}
          </>
        ) : (
          <>
            <List>
              {chatRequest?.map((request, index) => (
                <ChatRequestComponent
                  key={index}
                  request={request}
                  confirmMethod={handleConfirmChatRequest}
                  declineMethod={handleDeclineChatRequest}
                />
              ))}
            </List>
            <SearchUserComponent onSubmit={(event) => event.preventDefault()}>
              <SearchUserInput
                placeholder="Pesquisar pelo nome do usuário"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <SendButton type="submit">
                <BiSearch
                  style={{
                    width: "1.75rem",
                    height: "1.75rem",
                  }}
                />
              </SendButton>
            </SearchUserComponent>
            <UsersList>
              {usersSearch ? (
                usersSearch.map((userToSend, index) => (
                  <UserSearch
                    key={index}
                    user={userToSend}
                    senderEmail={userData.email}
                    sendChatRequest={handleSendChatRequest}
                  />
                ))
              ) : (
                <HoldWarningContainer>
                  <FaArrowUp style={{ fontSize: "2.5rem" }} />
                  <WarningText>
                    Utilize a barra de pesquisa acima para encontrar novos
                    usuários
                  </WarningText>
                </HoldWarningContainer>
              )}
              {usersSearch && limitPage && limitPage > 1 ? (
                <PaginateContainer>
                  <PaginateButton
                    disabled={activeSearchPage === 1}
                    onClick={() => handleChangePage(activeSearchPage - 1)}
                  >
                    <IoIosArrowBack
                      style={{ fontSize: "1rem", color: colors.text }}
                    />
                  </PaginateButton>
                  <Page>{activeSearchPage}</Page>
                  <PaginateButton
                    disabled={
                      activeSearchPage === limitPage || limitPage === undefined
                    }
                    onClick={() => handleChangePage(activeSearchPage + 1)}
                  >
                    <IoIosArrowForward
                      style={{ fontSize: "1rem", color: colors.text }}
                    />
                  </PaginateButton>
                </PaginateContainer>
              ) : (
                <></>
              )}
            </UsersList>
          </>
        )}
      </HomeMainContent>
      <Modal
        openModal={isModalOpen}
        onAccept={handleLogout}
        onReject={onClose}
        title="Sair desta conta"
        contentText="Quer mesmo deslogar com esta conta?"
        onClose={onClose}
      />
      <Modal
        openModal={isChatDeleteModalOpen}
        onAccept={handleDeleteChat}
        onReject={onDeleteModalClose}
        title={`Deletar a conversa com ${activeRoom?.user.name}`}
        contentText={`Caso depois queira conversar com este usuário novamente, envie-o um pedido de conversa.`}
        onClose={onDeleteModalClose}
      />
    </Body>
  );
};

export default HomePage;
