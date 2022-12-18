import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import { clearUser } from "../features/authSlice";
import {useDispatch} from "react-redux";


export default function Navbar() {
  const navigate = useNavigate();
  // const user = useSelector((state) => state.auth.user ) 
  const {user} = useSelector((state) => state.auth ) 
  const dispatch = useDispatch(clearUser())


  const handleLogout = () => {
    
    //! clear user data

    dispatch(clearUser())
    navigate("login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Clarusway News
          </Typography>
          {user ? (
            <>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => navigate("/")}>
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
