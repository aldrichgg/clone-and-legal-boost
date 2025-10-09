import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Endereço</h3>
            <p className="text-foreground font-semibold">R DOS PATRIOTAS, 38 A</p>
            <p className="text-muted-foreground">CNPJ: 31.143.277/0001-05</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Contato</h3>
            <p className="text-foreground">
              <a href="tel:11999553826" className="hover:text-primary transition-colors">
                11999553826
              </a>
            </p>
            <p className="text-foreground">
              <a href="mailto:suporte@turbineup.com.br" className="hover:text-primary transition-colors">
                suporte@turbineup.com.br
              </a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <Link 
            to="/lgpd" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Política de Privacidade (LGPD)
          </Link>
          <p className="text-muted-foreground mt-2">
            © {new Date().getFullYear()} TurbineUp. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
