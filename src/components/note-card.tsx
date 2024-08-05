"use client";

import { useRef, useEffect } from "react";
import Trash from "./icons/trash";

export interface NoteProps {
  id: number;
  body: string;
  colors: {
    id: string;
    colorHeader: string;
    colorBody: string;
    colorText: string;
  };
  position: {
    x: number;
    y: number;
  };
}

const autoGrow = (textAreaRef: React.RefObject<HTMLTextAreaElement>): void => {
  const { current } = textAreaRef;
  current!.style.height = "auto"; // Reset the height
  current!.style.height = current!.scrollHeight + "px"; // Set the new height
};

const NoteCard = ({ id, body, colors, position }: NoteProps) => {
  const textAreaRef: React.RefObject<HTMLTextAreaElement> = useRef(null);

  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  return (
    <div
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
      ></div>
      <div className="card-body">
        <textarea
          ref={textAreaRef}
          onInput={(e) => autoGrow(textAreaRef)}
          style={{ color: colors.colorText }}
          defaultValue={body}
        ></textarea>
      </div>
      <Trash />
    </div>
  );
};

export default NoteCard;
