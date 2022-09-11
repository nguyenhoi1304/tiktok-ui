import Portal from "~/components/Portal";

function Following() {

    const handlePublish = () => {

    }
    return (
        <>
            <h1> trang followings</h1>
            <Portal containerId='publish-btn'>
                <button onClick={handlePublish}>Save and Punlish</button>
            </Portal>
        </>
    );
}

export default Following;
