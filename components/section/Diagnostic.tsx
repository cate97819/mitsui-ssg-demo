"use client";

import React, { useEffect, useState } from "react";

type Question = {
  name: string;
  options: string[];
}[];

const Diagnostic = () => {
  const [answer, setAnswer] = useState<Array<number>>([]);

  const setAnswerHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const value = parseInt(e.currentTarget.value);
    const ary = [...answer];
    ary.push(value);
    setAnswer(ary);
  };

  const resetAnswerHandler = () => {
    setAnswer([]);
  };

  const questions: Question = [
    {
      name: "診断を開始する",
      options: ["診断スタート"],
    },
    {
      name: "朝食はどれくらいの頻度でとっていますか？",
      options: ["毎日食べる", "週3～4階", "週1～2階", "ほとんど食べない"],
    },
    {
      name: "昼食はどのように済ませることが多いですか？",
      options: ["弁当", "外食", "自宅で作る", "その他"],
    },
    {
      name: "夕食のメニューはどのようなものが多いですか？",
      options: ["和食", "洋食", "中華", "その他"],
    },
    {
      name: "間食はどれくらいとりますか？",
      options: ["毎日する", "週3～4回", "週1～2回", "ほとんどとらない"],
    },
    {
      name: "食事の時間は決まっていますか？",
      options: [
        "決まった時間に食べる",
        "日によって前後する",
        "好きな時に食べる",
      ],
    },
    {
      name: "一度の食事はどれくらいとりますか？",
      options: [
        "いつもお腹いっぱい食べる",
        "少し足りないことが多い",
        "いつも残してしまう",
      ],
    },
    {
      name: "一日に水分をどれくらいとっていますか？",
      options: ["2L以上", "1L～2L", "1L未満"],
    },
    {
      name: "食事制限などを行っていますか？",
      options: [
        "ダイエット中",
        "特に何もしていない",
        "健康のために制限している",
      ],
    },
  ];

  useEffect(() => {
    console.log(answer);
  }, [answer]);

  if (answer.length === 0) {
    return (
      <div className="w-full max-w-[1000px] mx-auto aspect-video rounded-3xl bg-amber-400 my-20 p-4">
        <div className="bg-amber-100 w-full h-full rounded-3xl flex flex-col items-center justify-center gap-10">
          <h1 className="text-4xl font-bold text-black text-center flex flex-col gap-1 bg-white/85 rounded-3xl px-12 pt-2 pb-3">
            <span className="text-lg text-amber-600">おいしいコンテンツを提案</span>食生活改善診断
          </h1>
          <img
            src="/images/25931071.png"
            alt=""
            className="w-full max-w-[400px] object-cover aspect-video"
          />
          <button
            value={0}
            className="bg-amber-500 text-white text-xl font-bold px-4 py-1 rounded-full hover:bg-amber-700 transition-all ease-in-out"
            onClick={setAnswerHandler}
          >
            診断スタート
          </button>
        </div>
      </div>
    );
  } else if (answer.length < questions.length) {
    return (
      <div className="w-full max-w-[1000px] mx-auto aspect-video rounded-3xl bg-amber-400 my-20 p-4">
        <div className="bg-amber-100 w-full h-full rounded-3xl flex flex-col items-center justify-center gap-10">
          <h1 className="text-xl font-bold text-black text-center flex flex-col gap-1 bg-white/85 rounded-3xl px-12 pt-2 pb-3">
            Q：{questions[answer.length].name}
          </h1>
          <ul className="flex flex-row gap-4">
            {questions[answer.length].options.map((item, i) => (
              <li key={i}>
                <button
                  value={i}
                  className="bg-amber-500 text-white text-xl font-bold px-4 py-1 rounded-full hover:bg-amber-700 transition-all ease-in-out"
                  onClick={setAnswerHandler}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else if (answer.length === questions.length) {
    return (
      <div className="w-full max-w-[1000px] mx-auto rounded-3xl bg-amber-400 my-20 p-4">
        <div className="bg-amber-100 w-full h-full rounded-3xl flex flex-col items-center justify-center gap-10 py-10">
          <h1 className="text-xl font-bold text-black text-center flex flex-col gap-1 bg-white/85 rounded-3xl px-12 pt-2 pb-3">
            お疲れ様でした！<br/>
            <span className="text-base">
              食生活の改善案をご提案いたします！
            </span>
          </h1>
          <dl className="flex flex-col gap-4">
            <div className="bg-white rounded-full px-10 py-2 flex flex-col gap-1">
              <dt>Q1：{questions[1].name}</dt>
              <dd className="text-sm">
                あなたの回答：{questions[1].options[answer[1]]}<br/>
              </dd>
              {answer[1] !== 0 &&
                <span className="underline text-center text-sm flex flex-row items-center gap-2 text-slate-900 hover:opacity-85 w-fit cursor-pointer">忙しいあなたにオススメの時短メニュー<img src="/images/open-in-new-tab.svg" className="w-4"/></span>
              }
            </div>
            <div className="bg-white rounded-full px-10 py-2">
              <dt>Q2：{questions[2].name}</dt>
              <dd>
                あなたの回答：{questions[2].options[answer[2]]}<br/>
                {answer[2] === 1 &&
                <span className="underline text-center text-sm flex flex-row items-center gap-2 text-slate-900 hover:opacity-85 w-fit cursor-pointer">自宅での料理がラクになる食材キット<img src="/images/open-in-new-tab.svg" className="w-4"/></span>
                }
                {answer[2] === 3 &&
                <span className="underline text-center text-sm flex flex-row items-center gap-2 text-slate-900 hover:opacity-85 w-fit cursor-pointer">自宅での料理がラクになる食材キット<img src="/images/open-in-new-tab.svg" className="w-4"/></span>
                }
              </dd>
            </div>
            <div className="bg-white rounded-full px-10 py-2">
              <dt>Q3：{questions[3].name}</dt>
              <dd>
                あなたの回答：{questions[3].options[answer[3]]}<br/>
                {answer[3] === 1 &&
                <span className="underline text-center text-sm flex flex-row items-center gap-2 text-slate-900 hover:opacity-85 w-fit cursor-pointer">和食好きのあなたに！オススメメニュー<img src="/images/open-in-new-tab.svg" className="w-4"/></span>
                }
                {answer[3] === 2 &&
                <span className="underline text-center text-sm flex flex-row items-center gap-2 text-slate-900 hover:opacity-85 w-fit cursor-pointer">洋食好きのあなたに！オススメメニュー<img src="/images/open-in-new-tab.svg" className="w-4"/></span>
                }
                {answer[3] === 3 &&
                <span className="underline text-center text-sm flex flex-row items-center gap-2 text-slate-900 hover:opacity-85 w-fit cursor-pointer">中華好きのあなたに！オススメメニュー<img src="/images/open-in-new-tab.svg" className="w-4"/></span>
                }
              </dd>
            </div>
            <div className="bg-white rounded-full px-10 py-2">
              <dt>Q4：{questions[4].name}</dt>
              <dd>
                あなたの回答：{questions[4].options[answer[4]]}<br/>
                {answer[4] !== 3 &&
                <span className="underline text-center text-sm flex flex-row items-center gap-2 text-slate-900 hover:opacity-85 w-fit cursor-pointer">気にせず食べられるヘルシーな間食メニュー<img src="/images/open-in-new-tab.svg" className="w-4"/></span>
                }
              </dd>
            </div>
            <div className="bg-white rounded-full px-10 py-2">
              <dt>Q5：{questions[5].name}</dt>
              <dd>
                あなたの回答：{questions[5].options[answer[5]]}<br/>
                {answer[5] !== 0 &&
                <span className="underline text-center text-sm flex flex-row items-center gap-2 text-slate-900 hover:opacity-85 w-fit cursor-pointer">忙しいあなたにオススメの食事<img src="/images/open-in-new-tab.svg" className="w-4"/></span>
                }
              </dd>
            </div>
            <div className="bg-white rounded-full px-10 py-2">
              <dt>Q6：{questions[6].name}</dt>
              <dd>
                あなたの回答：{questions[6].options[answer[6]]}<br/>
              </dd>
            </div>
            <div className="bg-white rounded-full px-10 py-2">
              <dt>Q7：{questions[7].name}</dt>
              <dd>
                あなたの回答：{questions[7].options[answer[7]]}<br/>
                {answer[7] !== 0 &&
                <span className="underline text-center text-sm flex flex-row items-center gap-2 text-slate-900 hover:opacity-85 w-fit cursor-pointer">手軽に水分補給！オススメドリンク<img src="/images/open-in-new-tab.svg" className="w-4"/></span>
                }
              </dd>
            </div>
            <div className="bg-white rounded-full px-10 py-2">
              <dt>Q8：{questions[8].name}</dt>
              <dd>
                あなたの回答：{questions[8].options[answer[8]]}<br/>
                {answer[7] !== 1 &&
                <span className="underline text-center text-sm flex flex-row items-center gap-2 text-slate-900 hover:opacity-85 w-fit cursor-pointer">ダイエットにオススメの糖質オフメニュー<img src="/images/open-in-new-tab.svg" className="w-4"/></span>
                }
              </dd>
            </div>
          </dl>
          <button
            className="bg-amber-500 text-white text-xl font-bold px-4 py-1 rounded-full hover:bg-amber-700 transition-all ease-in-out"
            onClick={resetAnswerHandler}
          >
            最初からやりなおす
          </button>
        </div>
      </div>
    );
  }
};

export default Diagnostic;
