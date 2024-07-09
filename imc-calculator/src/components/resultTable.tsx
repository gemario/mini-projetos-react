import { formatNumber } from "../lib/utils"

export function ResultTable({
  IMCData,
 } : { 
  IMCData: {
    weight: number; 
    height: number; 
    IMC: number;
    IMCResult: string};
  }) { 
  return(
    <table className="w-full">
      <thead>
        <tr className="border-b border-b-rose-500">
          <th className="text-center pt-[10px] pb-2 font-semibold ">Peso</th>
          <th className="text-center pt-[10px] pb-2 font-semibold ">Altura</th>
          <th className="text-center pt-[10px] pb-2 font-semibold ">IMC</th>
          <th className="text-center pt-[10px] pb-2 font-semibold ">Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center pt-[10px] pb-2">{formatNumber(IMCData.weight)} Kg</td>
          <td className="text-center pt-[10px] pb-2">{formatNumber(IMCData.height * 100, 0)} Cm</td>
          <td className="text-center pt-[10px] pb-2">{formatNumber(IMCData.IMC)}</td>
          <td className="text-center pt-[10px] pb-2">{IMCData.IMCResult}</td>
        </tr>
      </tbody>
             
    </table>
  )  
}