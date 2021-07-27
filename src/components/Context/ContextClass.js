import React from "react";

const UserContext = React.createContext();

const UserProvider = UserContext.Consumer;

const UserConsumer = UserContext.Provider;

export { UserProvider, UserConsumer };
