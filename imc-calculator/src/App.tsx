import { FormEvent, useState, MouseEvent } from "react";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Label } from "./components/label";
import { CalculateIMC, IMCResult } from "./lib/IMC";
import { ResultTable } from "./components/resultTable";


export function App() {
  const [ IMCData, setIMCData ] = useState<null | {
    weight: number 
    height: number 
    IMC: number 
    IMCResult: string
  }>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()  

    //get data from form
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as { weight: string, height: string }
    
    //parse and handle string to number
    const { weight, height } = data
    const weightNumber = parseFloat(weight.replace(',', '.'));
    const heightNumber = parseFloat(height.replace(',', '.')) / 100;

    if(isNaN(weightNumber) || isNaN(heightNumber)) {
      alert("Ops... Você precisa preencher os campos com números válidos!");
      return
    }
    //handle invalid numbers
    if(weightNumber < 2 || weightNumber > 500) {
      alert("Ops... O peso precisa ser maior que 2Kg e menor que 500kg!")
    }

    if(heightNumber < 0.5 || heightNumber > 2.5) {
      alert("Ops... A altura precisa ser maior que 50cm e menor que 2,5m!")
    }
    //calcular imc
    const IMC = CalculateIMC(weightNumber, heightNumber)
    const IMCResultString = IMCResult(IMC)

    //set result
    setIMCData({
      weight: weightNumber,
      height: heightNumber,
      IMC : IMC,
      IMCResult: IMCResultString
    })

    //clear form
    event.currentTarget.reset()
  }

  function handleClickReset(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setIMCData(null)
  }

  return (
    <main className="bg-gray-100 max-w-[826px] pt-24 pb-20 my-[4rem] mx-auto flex items-center justify-center rounded-lg shadow-lg">
      <div className="bg-transparent flex flex-col justify-center items-center px-[203px]">
        <form id="form" onSubmit={handleSubmit}>
          <Label htmlFor="weight">Peso</Label>
          <Input type="text" id="weight" name="weight" placeholder="(Kg)" required disabled={!!IMCData}/>
          <Label htmlFor="height">Altura</Label>
          <Input type="text" id="height" name="height" placeholder="(Cm)" required disabled={!!IMCData}/>
          <div className="flex items-center justify-center">
            {IMCData ? (
              <Button onClick={handleClickReset} type="button">Refazer</Button>
            ):(
              <Button type="submit">Calcular</Button>
            )}
          </div>
        </form>
        <div className="w-full my-[54px]">
          {IMCData ? (
            <ResultTable IMCData={IMCData}/>
          ) : (
            <h2 className="text-xl text-center text-gray-400">
              Saiba agora se está no seu <br /> peso ideal!
            </h2>  
          )}
        </div>
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr className="w-full bg-transparent odd:bg-gray-200" >
                <th className="text-left px-7 py-1 text-rose-500">IMC</th>
                <th className="text-left px-7 py-1 text-rose-500">Classificação</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
            
          </table>
        </div>
      </div>
    </main>
  )
}

