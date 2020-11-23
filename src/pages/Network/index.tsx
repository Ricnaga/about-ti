import React from 'react';
import {MainNet} from './styles'


const Network:React.FC = () => {
    return (
        <MainNet>
            <h1>Essa página irá comentar um pouco sobre a equipe de network - redes.</h1>
            <h2>Primeiro que essa área não tem nenhuma conexão com redes (rsrsrs). 
                Essa área é responsável para que seu equipamento ou o equipamento do usuário final se estabeleça uma conexão com a internet de um modo leve e seguro.
                Existem diversas área dentro de redes, citarei a descrição de algumas dessas na lista abaixo.
                Dentro dessa área existem os analistas:</h2>
                <ul>
                    <li>Redes</li>
                    <li>Segurança</li>
                    <li>Devops</li>
                    <li>Server</li>
                    <li>Telefonia Voip</li>
                    <li>Videoconferência</li>
                    <li>Suporte</li>
                    <li>Infraestrutura</li>
                </ul>

            <p><strong>Redes:</strong> responsáveis pela resolução de problemas de lentidão durante a navegação, apesar da saberem como montar uma topologia fisicamente, o correto é não realizarem essa ação.
            resumidamente cuida da parte lógica da rede.</p>
            <p><strong>Segurança:</strong> Detentores de manter a segurança dentro de uma rede lógica, também não resolvem problemas físicos, apenas são responsáveis por manter uma rede segura.</p> 
            <p><strong>Suporte:</strong> Profissão mais perto da área de informática, cuidam do equipamento, sistemas, delegam situaçõesmai complexas as demais áreas</p> 
            <p><strong>Infraestrutura:</strong> Profissão que opera somente com situações físicas, vou explicar(rsrsrs). 
            Analistas de infraestrutura resolvem problemas físicos referente ao funcionamento de uma topologia de rede trocando equipamento ou instalando um novo.</p> 
        </MainNet>
    )
}

export default Network;
