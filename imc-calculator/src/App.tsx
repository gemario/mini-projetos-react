export function App() {
  return (
    <div className="bg-gray-100 max-w-[826px] pt-24 pb-20 mt-[5.5rem] mx-auto rounded-lg shadow-lg">
      <div className="bg-transparent flex flex-col justify-center items-center px-[203px]">
        <form className="" action="">
          <label className="text-gray-700 font-bold" htmlFor="">Peso</label>
          <input className="w-full py-3 mb-4 pl-6 rounded border-solid border border-gray-400 outline-none bg-gray-200 focus:bg-transparent focus:border-rose-500 focus:placeholder:text-gray-900" type="text" placeholder="00,00 (Kg)" required/>
          <label className="text-gray-700 font-bold" htmlFor="">Altura</label>
          <input className="w-full py-3 mb-6 pl-6 rounded border-solid border border-gray-400 outline-none bg-gray-200 focus:bg-transparent focus:border-rose-500 focus:placeholder:text-gray-900" type="text" placeholder="0,00 (Mt)" required/>
          <div className="flex items-center justify-center">
            <button className="w-full bg-opacity-85 bg-rose-500 py-3 rounded-md font-bold text-white hover:bg-rose-500 transition duration-150 hover:ease-in">
              Calcular
            </button>
          </div>
        </form>
        <div className="my-[54px]">
          <h2 className="text-xl text-center text-gray-400">Saiba agora se está no seu <br /> peso ideal!</h2>
        </div>
        <div className="w-full">
          <table className="w-full">
            <tr className="w-full bg-transparent odd:bg-gray-200" >
              <th className="text-left px-7 py-1 text-rose-500">IMC</th>
              <th className="text-left px-7 py-1 text-rose-500">Classificação</th>
            </tr>
            <tr className="w-full bg-transparent odd:bg-gray-200">
              <td className="px-7 py-1">Menos de 17</td>
              <td className="px-7 py-1">Muito abaixo do peso</td>
            </tr>
            <tr className="w-full bg-transparent odd:bg-gray-200">
              <td className="px-7 py-1">Entre 17 e 18,49</td>
              <td className="px-7 py-1">Abaixo do peso</td>
            </tr>
            <tr className="w-full bg-transparent odd:bg-gray-200">
              <td className="px-7 py-1">Entre 18,5 e 24,99</td>
              <td className="px-7 py-1">Peso normal</td>
            </tr>
            <tr className="w-full bg-transparent odd:bg-gray-200">
              <td className="px-7 py-1">Entre 25 e 29,99</td>
              <td className="px-7 py-1">Acima do peso</td>
            </tr>
            <tr className="w-full bg-transparent odd:bg-gray-200">
              <td className="px-7 py-1">Entre 30 e 34,99</td>
              <td className="px-7 py-1">Obesidade I</td>
            </tr>
            <tr className="w-full bg-transparent odd:bg-gray-200">
              <td className="px-7 py-1">Entre 35 e 39,99</td>
              <td className="px-7 py-1">Obesidade II (severa)</td>
            </tr>
            <tr className="w-full bg-transparent odd:bg-gray-200">
              <td className="px-7 py-1">Acima de 40</td>
              <td className="px-7 py-1">Obesidade III (mórbida)</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

