import React, { useState } from "react";

export function Game() {
  const [relatives,setRelatives] = useState([
    "Maa",
    "Baba",
    "Chhota Bhai",
    "Chhoti Behen",
    "Badi Behen",
    "Bada Bhai",
    "Bua",
    "Fufa",
    "Mama",
    "Mami",
    "Mausi",
    "Mausa",
    "Chacha",
    "Chachi",
    "Tau",
    "Tai ji",
    "Dadi",
    "Nani",
    "Dada",
    "Nana",
  ]);
  const [pyar, setPyar] = useState([]);
  const [achhe, setAchhe] = useState([]);
  const [thik, setThik] = useState([]);
  const [kaleshi, setKaleshi] = useState([]);
  const [mar, setMar] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", item);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };



  const handleDrop = (e, div) => {
    e.preventDefault();
    const draggedItem = e.dataTransfer.getData('text/plain');
    const updatedItems = relatives.filter(item => item !== draggedItem);

    switch (div) {
      case 'pyar':
        setPyar(prevState => [...prevState, draggedItem]);
        break;
      case 'achhe':
        setAchhe(prevState => [...prevState, draggedItem]);
        break;
      case 'thik':
        setThik(prevState => [...prevState, draggedItem]);
        break;
      case 'kaleshi':
        setKaleshi(prevState => [...prevState, draggedItem]);
        break;
      case 'mar':
        setMar(prevState => [...prevState, draggedItem]);
        break;
      default:
        break;
    }

    setRelatives(updatedItems);
  };




  return (
    <div className="bg-slate-700 min-h-screen p-16">
      <div className="mb-8">
        <div className="flex bg-pink-400">
          <h3 className="w-40 p-6 font-sans font-bold">Pyaar 💖</h3>
          <div className="flex dragable bg-pink-600 w-full border-l-2 border-black" onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleDrop(e,'pyar')}>
            {pyar.map((item,index) => (
              <div className=" bg-gray-200 rounded font-semibold text-lg px-2 py-1 w-28 m-4" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex bg-yellow-400">
          <h3 className="w-40 p-6 font-sans font-bold">Achhe 😘</h3>
          <div className="flex dragable bg-yellow-600 w-full border-l-2 border-black" onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleDrop(e,'achhe')}>
            {achhe.map((item,index) => (
              <div className=" bg-gray-200 rounded font-semibold text-lg  px-2 py-1 w-28 m-4" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex bg-orange-400">
          <h3 className="w-40 p-6 font-sans font-bold">Thik Hai 😑</h3>
          <div className="flex dragable bg-orange-800 w-full border-l-2 border-black" onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleDrop(e,'thik')}>
            {thik.map((item,index) => (
              <div className=" bg-gray-200 rounded font-semibold text-lg  px-2 py-1 w-28 m-4" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex bg-red-500">
          <h3 className="w-40 p-6 font-sans font-bold">Kaleshi 👿</h3>
          <div className="flex dragable bg-red-700 w-full border-l-2 border-black" onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleDrop(e,'kaleshi')}>
            {kaleshi.map((item,index) => (
              <div className=" bg-gray-200 rounded font-semibold text-lg  px-2 py-1 w-28 m-4" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex bg-lime-500">
          <h3 className="w-40 p-6 font-sans font-bold">mar jao kutto 🤡</h3>
          <div className="flex dragable bg-lime-800 w-full border-l-2 border-black" onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleDrop(e,'mar')}>
            {mar.map((item,index) => (
              <div className=" bg-gray-200 rounded font-semibold text-lg  px-2 py-1 w-28 m-4" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto whitespace-nowrap ml-14 mr-14">
        <div className="inline-block mb-2">
          {relatives.map((item, index) => (
            <div
              key={index}
              className="inline-block px-4 py-2 mr-4 bg-gray-200 rounded font-semibold text-lg"
                draggable
                onDragStart={(e)=>handleDragStart(e,item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
