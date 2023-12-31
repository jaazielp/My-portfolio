export function About() {
    return (
        <section className="contanier mx-auto my-4 max-w-5xl p-4"> 
            <div className="relative p-4 text-center">
                <h2 className="relative text-blue-900 font-bold z-10">
                    <span className="mr-2 font-headline text-3xl">Sobre</span>
                    <span className="font-handwriting text-4xl">Mim</span>
                </h2>
                <p className="relative text-sm text-gray-600">
                    Tenho mais de 10 projetos executados e gostaria que o próximo seja o seu.
                </p>
                <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40"></div>
            </div>

            <div className="relative mx-auto mt-20 max-w-lg">
                <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48 ">
                    <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
                        <p className="font-handwriting text-lg font-bold">Olá,</p>
                        <p>
                        <span className="mr-1">Meu nome é</span>
                        <span className="font-headline font-bold uppercase text-blue-900">
                            Jaaziel Pereira
                        </span>
                        </p>

                        <table className="mt-4 w-full text-sm">
                            <body>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                    Idade:
                                    </td>
                                    <td>23</td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                    Celular:
                                    </td>
                                 <td>
                                    <a href="tel:+551299999999" className="underline hover:text-blue-800">
                                    +55 41 9.9831-0046
                                    </a>
                                 </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                     Email:
                                    </td>
                                    <td>
                                    <a href="mailto:jaaziel.pereira2000@gmail.com"className="underline hover:text-blue-800">
                                    jaaziel.pereira2000gmail.com
                                    </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                    Endereço:
                                    </td>
                                    <td>
                                    <a href="https://www.google.com/maps/place/R.+Jos%C3%A9+Domingues+Pereira,+1700+-+Jardim+Busmayer,+Campo+Largo+-+PR,+83606-210/@-25.446616,-49.5406977,17z/data=!3m1!4b1!4m6!3m5!1s0x94dd178e1d7a03ff:0x901bdaa2c0d3db4f!8m2!3d-25.4466209!4d-49.5381228!16s%2Fg%2F11f2y3sv2s?entry=ttu" target="_blank" className="underline hover:text-blue-800" >
                                    Campo Largo - PR
                                    </a>
                                    </td>
                                </tr>
                                <tr>
                                     <td className="font-headline font-bold uppercase text-blue-900">
                                        Disponível:
                                    </td>
                                    <td>
                                     <span className="relative flex h-3 w-3">
                                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                     <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                    </span>
                                    </td>
                                </tr>
                            </body>
                         </table>

                    </div>
                    <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url('/assets/foto-perfil.jpeg')] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"></div>
                </div>
            </div>
        </section>
    )
}

// https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1528