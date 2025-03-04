import { TbBrandReact } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { TbBrandMysql } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="border-b border-slate-900 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologie</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-slate-600 p-4">
            <TbBrandReact className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-slate-600 p-4">
            <TbBrandTailwind className="text-7xl text-teal-400"/>
        </div>
        <div className="rounded-2xl border-4 border-slate-600 p-4">
            <TbBrandNodejs className="text-7xl text-emerald-400"/>
        </div>
        <div className="rounded-2xl border-4 border-slate-600 p-4">
            <TbBrandPython className="text-7xl text-amber-400"/>
        </div>
        <div className="rounded-2xl border-4 border-slate-600 p-4">
            <TbBrandMysql className="text-7xl text-blue-400"/>
        </div>
      </div>
    </div>
  );
}

export default Technologies
