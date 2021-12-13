import styled from "styled-components";
import { FiTrash2, FiSave } from "react-icons/fi";

export const StyledButton = styled.button`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  background: blue;
  color: white;
  cursor: pointer;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.7;
  }
`;

export const PlainButton = styled(StyledButton)`
  background: transparent;
  width: 12rem;
  border: 2px solid white;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  align-self: right;
`;

export const StyledTrashIcon = styled(FiTrash2)`
  font-size: 1.5rem;
  color: red;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const AbsoluteIconButton = styled(StyledButton)`
  position: absolute;
  bottom: 0;
  right: 10px;
  border-radius: 50%;
  padding: 0.75rem;
  z-index: 3;
  background: red;

  &:hover {
    transform: scale(1.1);
  }
`;

export const AbsoluteTrashButton = styled(IconButton)`
  position: absolute;
  right: 10px;
  padding: 1rem;
`;

export const AbsoluteSkillsTrashButton = styled(StyledButton)`
  background: none;
  width: 5rem;
`;

export const DownloadButton = styled(PlainButton)`
  z-index: 2;
  position: absolute;
  right: 10px;
  top: 7px;
  padding: 0.75rem;
  width: auto;
  height: auto;

  &:hover {
    background: white;
    color: blue;
    opacity: 1;
  }

  @media print {
    display: none;
  }
`;

export const SaveButton = styled(StyledButton)`
  background: red;
  color: white;
  position: absolute;
  right: 60px;
  padding: 0.5rem;
`;

export const StyledSaveIcon = styled(FiSave)`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StyledDisabledButton = styled(StyledButton)`
  background: gray;
  cursor: none;

  &:hover {
    opacity: 1;
  }
`;
