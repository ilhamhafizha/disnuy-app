import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";

import { useEffect, useState } from "react";

const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return user;
};

export default useAuthState;
