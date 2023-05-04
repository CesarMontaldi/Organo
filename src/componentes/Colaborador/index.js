import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import './Colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size: 30,
        onClick: favoritar,
    }

    return (<div className="colaborador">
        <AiFillCloseCircle 
            size={25} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)} 
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                    ? <AiFillHeart {...propsfavorito} color='red'/> 
                    : <AiOutlineHeart {...propsfavorito} color='black'/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador;


