"use client";

import { useState } from "react";

const sampleText = {
  ko: "가나다라마바사 아자차카타파하",
  en: "The quick brown fox jumps over the lazy dog.",
};

export default function FontPreview() {
  const [koText, setKoText] = useState(sampleText.ko);
  const [enText, setEnText] = useState(sampleText.en);
  const [variableWeight, setVariableWeight] = useState(400);
  const [weight, setWeight] = useState(400);
  const weightOptions = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  const fontItems = [
    {
      name: "Geist Sans (font-geist_sans)",
      className: "font-geist_sans",
      variable: true,
    },
    {
      name: "Geist Mono (font-geist_mono)",
      className: "font-geist_mono",
      variable: true,
    },
    {
      name: "Montserrat (font-montserrat)",
      className: "font-montserrat",
      variable: true,
    },
    {
      name: "Raleway (font-raleway)",
      className: "font-raleway",
      variable: true,
    },
    {
      name: "Nunito (font-nunito)",
      className: "font-nunito",
      variable: true,
    },
    {
      name: "Quicksand (font-quicksand)",
      className: "font-quicksand",
      variable: true,
    },
    {
      name: "ArchitectsDaughter (font-architects-daughter)",
      className: "font-architects-daughter",
      variable: true,
    },
    {
      name: "Comfortaa (font-comfortaa)",
      className: "font-comfortaa",
      variable: true,
    },
    {
      name: "Pretendard (font-pretendard)",
      className: "font-pretendard",
      variable: true,
    },
    {
      name: "Suit (font-suit)",
      className: "font-suit",
      variable: true,
    },
    {
      name: "NanumSquareNeo (font-nanum-square-neo)",
      className: "font-nanum-square-neo",
      variable: true,
    },
    {
      name: "Paperlogy (font-paperlogy)",
      className: "font-paperlogy",
      variable: false,
    },
    {
      name: "SCoreDream (font-s-core-dream)",
      className: "font-s-core-dream",
      variable: false,
    },
  ];

  return (
    <div className="my-6">
      <h1 className="mb-4 text-3xl font-semibold">Font Preview Page</h1>
      <div className="mb-4 flex flex-col gap-3">
        <div className="@md:grid-cols-2 grid gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="ko-text" className="text-md">
              한글 테스트
            </label>
            <input
              type="text"
              value={koText}
              onChange={(e) => setKoText(e.target.value)}
              placeholder="한글 폰트 테스트"
              className="w-full rounded bg-stone-100 px-2 py-1 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="ko-text" className="text-md">
              Sample Text
            </label>
            <input
              type="text"
              value={enText}
              onChange={(e) => setEnText(e.target.value)}
              placeholder="영어 폰트 테스트"
              className="w-full rounded bg-stone-100 px-2 py-1 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="weight" className="text-md">
            VariableWeight: {variableWeight}
          </label>
          <input
            id={`weight`}
            type="range"
            min={100}
            max={900}
            step={1}
            value={variableWeight}
            onChange={(e) => setVariableWeight(parseInt(e.target.value))}
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor={`weight-select`} className="text-md">
            Weight:
          </label>
          <select
            id={`weight-select`}
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
            className="rounded border px-2 py-1 text-sm"
          >
            {weightOptions.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="@md:grid-cols-2 grid gap-4">
        {fontItems.map((font) => (
          <div
            key={font.name}
            className="rounded-xl border border-neutral-300 p-6 shadow-sm"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h2 className={`${font.className} mb-1 text-xl font-medium`}>
                  {font.name}
                </h2>
              </div>
              <div className="flex flex-col gap-1">
                <p>한글 폰트 테스트</p>
                <div
                  className={`${font.className} mb-1 text-lg`}
                  style={
                    font.variable
                      ? { fontVariationSettings: `'wght' ${variableWeight}` }
                      : { fontWeight: weight }
                  }
                >
                  <p className="rounded-lg bg-stone-100 px-3 py-2">{koText}</p>
                </div>
                <p>English font test</p>
                <div
                  className={`${font.className} text-base`}
                  style={
                    font.variable
                      ? { fontVariationSettings: `'wght' ${variableWeight}` }
                      : { fontWeight: weight }
                  }
                >
                  <p className="rounded-lg bg-stone-100 px-3 py-2">{enText}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
