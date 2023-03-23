const Modal = ({
    clickedImg,
    setClickedImg,
}: any) => {
    const handleClick = (e: any) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
            document.getElementsByClassName('navbar')[0].classList.remove('hidden')
        }
    };

    return (
        <>
            <div className="overlay dismiss" onClick={handleClick}>
                <img src={clickedImg} alt="bigger pic" />
                <span className="dismiss" onClick={handleClick}>
                    X
                </span>
            </div>
        </>
    );
};

export default Modal;
