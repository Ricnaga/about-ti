import React from 'react';

import {MainDev} from './styles'

const Development:React.FC = () => {
    return (
        <MainDev>
            <h1>Olá, essa página está inteiramente dedicada ao mundo Dev (desenvolvimento)</h1>
            <h2>Desenvolvedores ou Programadores são profissões dentro da T.I. onde são responsáveis inteiramente pela parte de sistemas, seja ela em resolução ou implementação de tecnologias novas.
                Em hipótese alguma resolvem problemas físicos, citarei alguns tipos de desenvolvedores e descreverei algumas das citações abaixo.(Claro que todas são com base da minha experiência ou entendimento :)).
            </h2>

            <ul>
                <li>Analista de sistemas</li>
                <li>Front End</li>
                <li>Back End</li>
                <li>FullStack</li>
                <li>Administrador de banco de dados(DBA)</li>
                <li>Cientista de dados</li>
            </ul>

            <p><strong>Front End:</strong> São desenvolvedores com o maior foco na no front side de um site ou aplicação web.
            Maior parte das vezes codificam código para o intuito de agradar visualmente a navegação de um usuário final.</p>
            <p><strong>Back End:</strong> Responsáveis pelos bastidores do funcionamento de uma aplicação ou site.
            Cuidam para que o tratamento do dados que chegam do usuário, sejam polidos e devolvidos de forma clara, resumida e objetiva.</p>
            <p><strong>Cientista de dados:</strong> Profissão nova, cientistas de dados através de um calculo matemático conseguem estimar lucros e prejuízo da uma empresa ou cliente.
            Com esses dados, uma vez que bem polidos podem auxiliar o tomador de decisão sobre qual o melhor ou menos pior futuro da empresa ou cliente.</p>
        </MainDev>
    )
}

export default Development;
