import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../utils/atom/userAtom";


export default function Header() {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  // Redirect to the login page if the user is not logged in
  useEffect(() => {
    if (!user || user == "") {
      navigate("/LoginPage");
    }
    
  }, [user, navigate]);

  // Render nothing if the user is not logged in
  if (!user) {
    return null;
  }

  return (
    <div>
      <div className="header sticky top-0 z-50">
        <nav className="flex items-center justify-between px-32 border-b border-gray-700 py-3 bg-black text-white h-[10vh]">
          <h3 className="hover:border cursor-pointer px-5 py-2 rounded-lg uppercase">
            My <span className="text-red-700 font-bold">Blog</span>
          </h3>
          <ul className="flex uppercase">
            <li
              onClick={() => navigate("/")}
              className="hover:border cursor-pointer px-5 py-2 rounded-lg">
              Home
            </li>
            <li
              onClick={() => navigate("/AddNewBlog")}
              className="hover:border cursor-pointer px-5 py-2 rounded-lg">
              Add new blog
            </li>
            </ul>
        </nav>
      </div>
    </div>
  );
}
