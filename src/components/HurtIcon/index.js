import { Button } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

export const HurtIcon = () => {
  const [isLike, setLike] = useState(false);
  const like = () => setLike(!isLike ? true : false);
  return (
    <Button onClick={() => like()}>
      {!isLike ? (
        <FavoriteBorderOutlinedIcon />
      ) : (
        <FavoriteOutlinedIcon className="red" />
      )}
    </Button>
  );
};
