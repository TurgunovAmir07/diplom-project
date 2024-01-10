import React from "react";
import Emoji from "react-emoji-render";
import { StyledDiv, StyledEmoji } from "./Video.style";
import { LogOut } from "../logOut/LogOut";
import { ThemeContext, themes } from "../../utils/theme/themeContext";
import { useContext } from "react";
import { Button } from "@mui/material";
import "../../index.css";

const Video = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("theme", theme);

  return (
    <>
      <StyledDiv>
        <div
          className="main-container"
          style={{
            position: "relative",
          }}
        >
          <video
            className="video"
            loop
            autoPlay
            muted
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <source src="/src/components/video/video.mp4" />
          </video>
          <StyledEmoji>
            <Button
              variant="outlined"
              onClick={toggleTheme}
              className={`theme-btn ${theme === themes.dark && "dark"}`}
              style={{
                position: "absolute",
                top: "40px",
                left: "30px",
              }}
            >
              switch theme
            </Button>
            <div className="log-out">
              <LogOut />
            </div>
            <div className="emoji">
              <Emoji
                text="🌍Go away"
                className={`emoji-title ${theme === themes.dark && "dark"}`}
              />
              <div className={`emoji-text ${theme === themes.dark && "dark"}`}>
                Avoid joining a global community of remote workers living and
                traveling around the world.
              </div>
            </div>
          </StyledEmoji>
        </div>
      </StyledDiv>
    </>
  );
};

export default Video;
