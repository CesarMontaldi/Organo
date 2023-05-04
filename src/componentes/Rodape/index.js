import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="Icone Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt="Icone Twiter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagens/ig.png" alt="Icone Instagran" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Logo Organo" />
            </section>
            <section>
                <p>
                    Desenvolvido por César Montaldi.
                </p>
            </section>
        </footer>
    )
}

export default Rodape;