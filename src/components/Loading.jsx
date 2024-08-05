import loader from "/loader.gif"

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#181817]">
        <img className="h-[100%] object-cover" src={loader} alt="" />
    </div>
);
}

export default Loading