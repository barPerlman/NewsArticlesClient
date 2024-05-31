import React from "react";
import './BreakingNewsModal.css';
import { RiCloseLine } from "react-icons/ri";

interface BreakingNewsModalProp {
    setBreakingNewsModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BreakingNewsModal:React.FC<BreakingNewsModalProp> = ({setBreakingNewsModalIsOpen}) => {

    return (
        <>
            <div className="darkBG" onClick={() => setBreakingNewsModalIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Title</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setBreakingNewsModalIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className="modalContent">
                        description and author and other metadata
                    </div>
                    <div className="streamArea">
                        content section
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="stopBtn" onClick={() => setBreakingNewsModalIsOpen(false)}>
                                Stop
                            </button>
                            <button
                                className="nextBtn"
                                onClick={() => setBreakingNewsModalIsOpen(false)}
                            >
                                Next Breaking News
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BreakingNewsModal;
