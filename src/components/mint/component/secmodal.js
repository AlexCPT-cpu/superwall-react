import React from "react";
import Modal from "react-modal";
import {
  useAccount,
  useEnsName,
  useDisconnect,
} from "wagmi";
import truncateEthAddress from "truncate-eth-address";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    padding: "0px",
    overflow: "h",
    border: "none",
  },
  overlay: {
    zIndex: "20",
    background: "rgba(0, 0, 0, 0.6)",
  },
};
const SecModal = ({ openModal, closeModal }) => {

  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const copy = async () => {
    try {
      let text = document.getElementById("select").innerHTML;
      await navigator.clipboard.writeText(text);
      console.log("copied");
    } catch (err) {
      console.log("failed", err);
    }
  };
  return (
    <Modal isOpen={openModal} style={customStyles} onRequestClose={closeModal}>
      <div className=" rounded-xl z-20">
        <div className="  p-1 bg-white w-[350px] red-box-shadow mx-2 md:w-[600px] md:h-[250px] md:mx-auto rounded-[36px] shadow-6xl">
          <div className="bg-[#283142] md:h-[250px] rounded-[36px]">
            <div className="w-full text-[29.67px] text-center font-semibold pt-5">
              Connected
            </div>
            <div className="flex items-center justify-center py-5 w-[80%] mx-auto outline-none">
              <div>
                <img
              className="rounded-full w-6 h-6"
                      src={`https://avatars.dicebear.com/api/identicon/${
                        ensName ?? address
                      }.svg`}
                      width={150}
                      height={150}
                      alt='jazzicon'
                    />
              </div>
              &nbsp;&nbsp;&nbsp;
              <div>
                <p className="text-2xl text-md font-semibold leading-[42.71px]">
                {ensName ?? truncateEthAddress(address)}
                </p>
              </div>
            </div>
            <div className="flex items-center text-center justify-center">
            <button
              className="w-lg rounded-xl bg-gradient-to-b from-pink-600 to-purple font-bold cursor-pointer   text-white p-2 m-4"
              id="myBtn" onClick={disconnect}
            >
              Disconnect
            </button>
            </div>
            <div className="flex justify-evenly items-center">
              <div onClick={copy} className="flex mb-3 justify-evenly items-center">
                <div>
                  <img src="/assets/images/copy.png" alt="copy" />
                </div>
                <div className="hover:underline">Copy Address </div>
              </div>
              <div className="flex mb-3 justify-evenly items-center">
                <div>
                  <img
                    src="/assets/images/externallink.png"
                    alt="externallink"
                  />
                </div>
                <a target="blank"
                      href={`https://bscscan.com/address/${address}`}style={{textDecoration:'none', color:"white"}}><div className="hover:underline">View on Etherscan</div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-20 -top-10 flex items-center justify-center mt-5">
        <div className="cursor-pointer" onClick={closeModal}>
          <img src="/assets/images/cross.png" alt="cross" />
        </div>
      </div>
    </Modal>
  );
};

export default SecModal;
