import React from "react";
import Modal from "react-modal";
import {
  useConnect,
} from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { mainnet } from "wagmi/chains";


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
const MessageModal = ({
  openModal,
  closeModal,
}) => {

  const { connect: connectMetamask } = useConnect({
    connector: new MetaMaskConnector({ chains: [mainnet] }),
  });
  const { connect: connectWalletConnect } = useConnect({
    connector: new WalletConnectConnector({ chains: [mainnet] }),
  });
  const { connect: connectCoinbase } = useConnect({
    connector: new CoinbaseWalletConnector({ chains: [mainnet] }),
  });

  return (
    <Modal isOpen={openModal} style={customStyles} onRequestClose={closeModal}>
      <div className=" rounded-xl z-20">
        <div className="  p-1 bg-white red-box-shadow mx-2 w-auto md:w-[600px] md:mx-auto rounded-[36px] shadow-6xl">
          <div className="bg-[#283142] rounded-[36px]">
            <div className="w-full text-[29.67px] text-center font-semibold pt-5">
              Connect Your Wallet
            </div>
            <div className="flex items-center cursor-pointer justify-evenly py-10 space-x-3 w-full outline-none">
              <div onClick={connectWalletConnect}>
                <img
                  className="w-28"
                  src="/assets/images/walletconnect.png"
                  alt="walletconnect"
                />
              </div>
              <div onClick={connectMetamask}>
                <img className="w-28" src="/assets/images/metamak.png" alt="metamask" />
              </div>
              <div onClick={connectCoinbase}>
                <img className="w-20" src="/assets/images/coinbase.png" alt="coinbase" />
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

export default MessageModal;
