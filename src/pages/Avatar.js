import Portada from "../assets/Avatar/Portada.png";
import logo from "../assets/Header/logo.png";
import AttackTitanCard from "../components/Cards/AttackonTitanCard";
import DemonCard from "../components/Cards/DemonCard";
import DragonBallz from "../components/Cards/DragonBallzCard";
import Kaisen from "../components/Cards/KaisenCard";
import NarutoCard from "../components/Cards/NaturoCard";
import OnePiece from "../components/Cards/OnePieceCard";
import HeaderInicio from "../components/Header/HeaderInicio";
import "../styles/scss/Avatar.scss";

const Avatar = ({ setImageHeader }) => {
  return (
    <>
      <section className="portada">
        <figure className="portada__image-contaiener">
          <img src={Portada} className="portada__image"></img>
        </figure>
      </section>
      <section className="title ">
        <figure className="title__image-container">
          <img src={logo} className="title__image"></img>
        </figure>
        <h1 className="title__title-avatar">Eligue a tu Avatar</h1>
        <p className="title__title-description">
          Elige un avatar de alguno de los animes mas populares para tu cuenta
        </p>
      </section>
      <section className="card">
        <div className="card-container">
          <DragonBallz setImageHeader={setImageHeader}></DragonBallz>
          <NarutoCard setImageHeader={setImageHeader}></NarutoCard>
          <AttackTitanCard setImageHeader={setImageHeader}></AttackTitanCard>
          <DemonCard setImageHeader={setImageHeader}></DemonCard>
          <OnePiece setImageHeader={setImageHeader}></OnePiece>
          <Kaisen setImageHeader={setImageHeader}></Kaisen>
        </div>
      </section>
    </>
  );
};

export default Avatar;
