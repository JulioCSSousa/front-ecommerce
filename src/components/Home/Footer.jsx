import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Seção "Sobre Nós" */}
                <div className="footer-section">
                    <h3 className="footer-title">Sobre Nós</h3>
                    <p className="footer-text">
                        Este site possui hospedagem gratuita e está em desenvolvimento para fins de estudo em programação.
                    </p>
                    <div className="footer-socials">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub className="social-icon" />
                        </a>
                        <a href="mailto:contato@exemplo.com" aria-label="Email">
                            <FaEnvelope className="social-icon" />
                        </a>
                    </div>
                </div>

                {/* Seção "Links Úteis" */}
                <div className="footer-section">
                    <h3 className="footer-title">Links Úteis</h3>
                    <ul className="footer-links">
                        <li><a href="/politica-de-privacidade" className="footer-link">Política de Privacidade</a></li>
                        <li><a href="/termos-de-uso" className="footer-link">Termos de Uso</a></li>
                        <li><a href="/faq" className="footer-link">FAQ</a></li>
                    </ul>
                </div>

                {/* Seção "Contato" */}
                <div className="footer-section">
                    <h3 className="footer-title">Contato</h3>
                    <p className="footer-text">Email: contato@exemplo.com</p>
                    <p className="footer-text">Telefone: (11) 1234-5678</p>
                </div>
            </div>

            {/* Rodapé Inferior */}
            <div className="footer-bottom">
                <p>
                    Feito com <FaHeart className="heart-icon" /> por você | &copy; {new Date().getFullYear()} Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}