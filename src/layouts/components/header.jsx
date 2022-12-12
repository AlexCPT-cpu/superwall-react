import {
  useAccount,
  useEnsName,
} from "wagmi";
import truncateEthAddress from "truncate-eth-address";
import Link from "next/link";
import { Navbar } from "@nextui-org/react";
import { useState } from "react";
import SecModal from "components/mint/component/secmodal";
import MessageModal from "../../components/mint/component/modal";

export default function Header() {

  // const openNewModal =()=>{
  //     setmetamaskopenModals(true)
  // }
  const [openModal, setopenModal] = useState(false);
  //   const [metaMassModal,setmetaMassModal] = useState(false)
  function closeModal() {
    setopenModal(false);
  }

  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });


  return (
    <div>
          <Navbar isBordered variant="sticky">
            <Navbar.Brand>
            <div className='hamburger'>
                   <style jsx>{`
        .hamburger {
          display: none;
        }
        @media only screen and (max-width: 480px) {
            .hamburger{ 
                display: flex;
             }
            }
            
            @media only screen and (max-width: 770px) {
                .hamburger{ 
                    display: flex;
                 }
              }
            
              @media only screen and (max-width: 900px) {
                .hamburger{ 
                    display: flex;
                 }
                 }
      `}</style>
             <Navbar.Toggle aria-label="toggle navigation" />
            </div>

          &nbsp;
          &nbsp;
          &nbsp;
              <a href="/">
              <img className="w-28 md:w-44 mb-2" src="assets/images/logo.png"  alt="logo"/>
        </a>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
              <Navbar.Link href="/#utility">Utility & Perks</Navbar.Link>
              <Navbar.Link href="/#superdeal">
                Super deal
              </Navbar.Link>
              <Navbar.Link href="/#team">Super Team</Navbar.Link>
              <Navbar.Link href="/Mint">Mint</Navbar.Link>
              <Navbar.Link href="/#faq">FAQ</Navbar.Link>
              <Navbar.Link href="https://twitter.com/superwallglobal">   
                   <div className="flex flex-row">
          <a href="https://twitter.com/superwallglobal">
        <img className="ml-2 md:w-8  pr-2 cursor-pointer" src="assets/images/twitterlogo.png" alt="twitterlogo"/>
        </a>
        <a href="https://www.instagram.com/superwall_official/">
        <img className="ml-2 md:w-7  pr-2 cursor-pointer" src="assets/images/instalogo.png" alt="instalogo"/>
        </a>
        <a href="https://discord.gg/cRbAWmADjv">
        <img className="ml-2 md:w-8  pr-2 cursor-pointer" src="assets/images/discordicon.png" alt="discordicon"/>
        </a>
        </div></Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
            {isConnected ? (
            <button
              className="w-full rounded-xl bg-gradient-to-b from-pink-600 to-purple font-bold cursor-pointer   text-white p-2 m-4"
              id="myBtn" onClick={() => {
                setopenModal(!openModal);
              }}
            >
              {ensName ?? truncateEthAddress(address)}
            </button>
          ) : (
            <button
              className="w-full rounded-xl bg-gradient-to-b from-pink-600 to-purple font-bold cursor-pointer   text-white p-2 m-4"
              id="myBtn"   onClick={() => {
                setopenModal(!openModal);
              }}
            >
              Connect Wallet
            </button>
          )}
            </Navbar.Content>
            <Navbar.Collapse>
              <Navbar.CollapseItem>
                <Link
                  color="white"
                  css={{
                    minWidth: "100%",
                  }}
                  href="/#utility"
                >
                   <span className="text-white">Utility & Perks</span>
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="/#superdeal"
                >
                   <span className="text-white">Super Deal</span>
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="/#team"
                >
                   <span className="text-white">Super Team</span>
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="/Mint"
                >
                   <span className="text-white">Mint</span>
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="/#faq"
                >
                   <span className="text-white">FAQ</span>
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="https://twitter.com/superwallglobal"
                >
                    <div className="flex flex-row space-x-4">
          <a target='blank' href="https://twitter.com/superwallglobal">
          <img className="ml-2 w-8  pr-2 cursor-pointer" src="assets/images/twitterlogo.png" alt="twitterlogo"/>
          </a>
          <a target='blank' href="https://www.instagram.com/superwall_official/">
          <img className="ml-2 w-7  pr-2 cursor-pointer" src="assets/images/instalogo.png" alt="instalogo"/>
          </a>
          <a target='blank' href="https://discord.gg/cRbAWmADjv">
          <img className="ml-2 w-8  pr-2 cursor-pointer" src="assets/images/discordicon.png" alt="discordicon"/>
          </a>
        </div>
                </Link>
              </Navbar.CollapseItem>
          </Navbar.Collapse>
          </Navbar>
          {openModal ?
           !isConnected ? (
        <div className="w-full  flex justify-center  items-center ">
          <MessageModal
            openModal={openModal}
            closeModal={closeModal}
          />
        </div>
      ) : (
        <div className="w-full  flex justify-center  items-center ">
          <SecModal openModal={openModal} closeModal={closeModal} />
        </div>
      ) :
      null}
    </div>

  )
}