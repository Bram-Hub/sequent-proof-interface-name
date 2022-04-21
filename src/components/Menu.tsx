import React, { ReactElement, FC } from "react";
import {SequentData} from "../logic/Sequent";
import "./Menu.css";

interface Props {
    addSequent: (s: SequentData) => boolean;
    clearProof: () => void;
    editing: string | null;
}

const Menu: FC<Props> = ({addSequent, clearProof,
        editing}: Props): ReactElement => {
    return (
        <div className={"menu"}>
            <button onClick={() => alert('not implemented')}>
                Open
            </button>
            <button onClick={() => alert('not implemented')}>
                Save
            </button>
            <button onClick={() => {
                if (confirm("Reset the current proof?"))
                    clearProof();
            }}>
                New Proof
            </button>
            <button onClick={() => alert('not implemented')}>
                Undo
            </button>
            <button onClick={() => alert('not implemented')}>
                Redo
            </button>
            <button onClick={() => {
                const id = prompt("Enter ID:");
                if (id === null || id.length === 0)
                    alert("ID cannot be empty.");
                // TODO require ID to only have lettersr, numbers
                else
                    addSequent({
                        comment: "",
                        expr: null,
                        id: id,
                        ref_by: new Set<string>(),
                        refs: new Set<string>(),
                        rule: ""
                    });
            }}>
                New Sequent
            </button>
        </div>
    );
};

export default Menu;
