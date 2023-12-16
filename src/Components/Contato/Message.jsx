function Message(){
    return(
        <>
            <div className="max-w-md w-full mx-auto bg-third rounded-md shadow-lg shadow-[0_5px_15px_0px_white] p-8">
                <form action="">
                    <div className="mb-4">
                        <label className="block text-primary text-sm font-semibold mb-2" htmlFor="">Nome</label>
                        <input placeholder="Igor Pereira Gouveia" className="w-full px-3 py-2 border rounded-lg bg-fourth focus:border-secondary" required type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-primary text-sm font-semibold mb-2" htmlFor="">Email</label>
                        <input placeholder="igor@example.com" className="w-full px-3 py-2 border rounded-lg bg-fourth focus:border-secondary" required type="email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-primary text-sm font-semibold mb-2" htmlFor="">Mensagem</label>
                        <input placeholder="Escreva sua mensagem aqui" className="w-full px-3 py-2 border rounded-lg bg-fourth focus:border-secondary" required type="text" />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-fourth text-primary font-Poppins font-semibold px-4 py-2 rounded-lg hover:bg-primary hover:text-fourth focus:outline-white duration-300">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Message