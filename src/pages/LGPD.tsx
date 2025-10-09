import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const LGPD = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">
          Política de Privacidade e Proteção de Dados (LGPD)
        </h1>

        <div className="prose prose-invert max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              A TurbineUp está comprometida com a proteção da privacidade e dos dados pessoais de seus clientes e usuários, 
              em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Esta política descreve 
              como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Dados Coletados</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Coletamos as seguintes categorias de dados pessoais:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Dados de identificação (nome, CPF/CNPJ, endereço)</li>
              <li>Dados de contato (e-mail, telefone)</li>
              <li>Dados de navegação (cookies, endereço IP)</li>
              <li>Informações de redes sociais (quando você utiliza nossos serviços)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Finalidade do Tratamento</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Utilizamos seus dados pessoais para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Prestação de serviços de marketing digital</li>
              <li>Comunicação com clientes e suporte técnico</li>
              <li>Melhoria de nossos serviços</li>
              <li>Cumprimento de obrigações legais</li>
              <li>Análise de desempenho e métricas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Base Legal</h2>
            <p className="text-muted-foreground leading-relaxed">
              O tratamento de dados pessoais é realizado com base no consentimento do titular, execução de contrato, 
              cumprimento de obrigação legal e legítimo interesse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Seus dados podem ser compartilhados com plataformas de redes sociais (Instagram, TikTok, YouTube, Facebook, Kwai) 
              apenas quando necessário para a prestação dos serviços contratados. Não vendemos seus dados pessoais a terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Segurança dos Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso 
              não autorizado, perda, destruição ou alteração indevida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Você tem direito a:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
              <li>Revogar o consentimento</li>
              <li>Portabilidade dos dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos cookies para melhorar a experiência do usuário em nosso site. Você pode gerenciar suas 
              preferências de cookies através das configurações do navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. Retenção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, 
              salvo se houver obrigação legal de retenção por período superior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <div className="mt-4 p-4 bg-secondary rounded-lg">
              <p className="text-foreground"><strong>E-mail:</strong> suporte@turbineup.com.br</p>
              <p className="text-foreground"><strong>Telefone:</strong> 11999553826</p>
              <p className="text-foreground"><strong>Endereço:</strong> R DOS PATRIOTAS, 38 A</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">11. Alterações</h2>
            <p className="text-muted-foreground leading-relaxed">
              Esta política pode ser atualizada periodicamente. Recomendamos que você a revise regularmente. 
              A data da última atualização é indicada no início deste documento.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LGPD;
