import React, { Component, Fragment } from "react";

// Components
import Header from "./Header";

// Styles
import './main.scss';
import Post from "./Post";

const posts = [
    {
        id: 1,
        meta: {
            author: {
                name: "Thiago Oliveira Lobão",
                avatar: "https://scontent.fsdu7-1.fna.fbcdn.net/v/t1.0-9/10426659_10208169843593997_2961039199416315178_n.jpg?_nc_cat=0&oh=52e2375d3bc21bf103cef3df2798cd84&oe=5BDBEF58"
            },
            createdAt: 12
        },
        postContent: "Iniesta e Paulinho saíram, enquanto Arthur, Malcom e Lenglet chegaram. Rafinha Alcântara também retornou de empréstimo. Quem são os dez que você escolherá para jogar com Messi?"
    },
    {
        id: 2,
        meta: {
            author: {
                name: "Larissa da Silva Ferreira",
                avatar: "https://scontent.fsdu7-1.fna.fbcdn.net/v/t1.0-9/35381380_10209244535069953_786274096601104384_n.jpg?_nc_cat=0&oh=cebeee480ef2cf2b01a262b0af83ef2f&oe=5BE13E8C"
            },
            createdAt: 6
        },
        postContent: "Nos últimos dois dias, reuniões definiram detalhes do trabalho que será feito a partir de agora, neste novo ciclo, depois da eliminação contra a Bélgica, nas quartas de final do Mundial da Rússia."
    },
    {
        id: 3,
        meta: {
            author: {
                name: "Felipe Cabral",
                avatar: "https://scontent.fsdu7-1.fna.fbcdn.net/v/t1.0-9/32324940_1743148092428568_9135559261529571328_n.jpg?_nc_cat=0&oh=79e8f590fcfc630a2a8a0a180635cc31&oe=5BCB67B2"
            },
            createdAt: 22
        },
        postContent: "Assim que os últimos ajustes forem feitos, o empresário do técnico, Gilmar Veloz, que chegou ao Rio no início da semana com o treinador, vai formalizar o novo compromisso e a CBF poderá oficializar a permanência."
    }
];

class App extends Component {

    state = { posts };

    render() {

        const { posts } = this.state;
        const sortPosts = posts.sort((prevPost, nextPost) => prevPost.meta.createdAt > nextPost.meta.createdAt);

        return (
            <Fragment>
                <Header title="RocketBook" />
                <section className="content">
                    {sortPosts.map(post => <Post data={post} key={post.id} />)}
                </section>
            </Fragment>
        );
    }
}

export default App;
