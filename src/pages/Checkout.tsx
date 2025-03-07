import React, { useEffect, useState } from 'react';
import Header from '../components/Home/Header';
import { getUserAuth } from '../storage/AuthenticatorStorage';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1);
  interface Auth {
    name?: string;
    email?: string;
  }

  const [auth, setAuth] = useState<Auth>({});

  const nextStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setStep(step + 1);
  };
  const prevStep = () => step > 1 ? setStep(step - 1) : navigate(-1);

  useEffect(() => {
    const auth = getUserAuth();
    if (auth) {
      setAuth(auth);
    }
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
        <header style={{ width: '100%', padding: '1rem', backgroundColor: '#f8f9fa', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <section className="header-container">
            <div className="logo-content">
              <Header />
            </div>
          </section>
        </header>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <ol style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0, marginBottom: '2rem', cursor: 'pointer' }}>
              {[1, 2, 3].map((num) => (
                <li
                  key={num}
                  style={{
                    marginRight: '1rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '50%',
                    backgroundColor: step === num ? '#007bff' : '#e9ecef',
                    color: step === num ? '#fff' : '#000',
                    cursor: 'pointer',
                  }}
                  onClick={() => setStep(num)}
                >
                  {num}
                </li>
              ))}
            </ol>

            <form onSubmit={() => { }}>
              {step === 1 && auth.name ? (
                <>
                  <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label htmlFor="name">Nome</label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      value={auth.name}
                      disabled
                      required
                      style={{ backgroundColor: '#e9ecef', minWidth: '300px' }}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label htmlFor="email">E-mail</label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      value={auth.email}
                      disabled
                      required
                      style={{ backgroundColor: '#e9ecef', minWidth: '300px' }}
                    />
                  </div>
                </>
              ) : step === 1 && (
                <p>Percebi que você não esta logado, clique no botão abaixo para fazer login</p>
              )}

              {step === 2 && (
                <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <label htmlFor="delivery">Modo de entrega</label>
                  <select id="delivery" name="delivery" value={''}>
                    <option value="express">Express</option>
                    <option value="normal">Normal</option>
                  </select>
                </div>
              )}
              {step === 3 && (
                <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <label htmlFor="payment">Método de pagamento</label>
                  <select id="payment" name="payment" value={''} >
                    <option value="credit">Cartão de crédito</option>
                    <option value="debit">Cartão de débito</option>
                    <option value="paypal">Pix</option>
                  </select>
                </div>
              )}
              <div className="button-group" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={prevStep}
                  style={{ marginRight: '0.5rem' }}
                >
                  Voltar
                </button>

                <button
                  className="btn btn-dark"
                  type={step < 3 ? "button" : "submit"}
                  onClick={!auth.name ? () => navigate('/login') : step < 3 ? nextStep : () => { }}
                  style={{ marginRight: '0.5rem' }}
                >
                  {step === 1 && !auth.name ? 'Fazer login' : step <= 3 ? 'Avançar' : 'Concluir'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
