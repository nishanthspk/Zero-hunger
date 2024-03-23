import React from "react";
import Bg from "../assets/BG.png";
import Navbar from "../components/Navbar";
import Recipes from '../components/Layout'
import Burger from "../assets/burger.png";
import Eat from "../assets/eat.png";
import Recipe from "../assets/recipe.png";
import Track from '../assets/track.png';
import { Link } from "react-router-dom";
import Fruit from '../assets/fruit.png';
import Veg from '../assets/veg.png';
import Activity from '../assets/activity.png';

const Home = () => {
  return (
    <div
      className=" h-full bg-cover font-mono pb-6"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <Navbar />
      <div className=" pt-[10%] flex justify-center mx-20 space-x-10">
        <div className="items-center rounded-2xl  w-[30%] p-6 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl">
          <div className=" flex justify-center">
            <img className=" h-52 w-auto" src={Eat} alt="" />
          </div>
          <div className=" items-center">
            <p className=" text-xl flex justify-center font-semibold text-red-400">
              Eat Healthy
            </p>
            <p className=" text-base pt-3">
              Maintaining good health should be the primary focus of everyone.
            </p>
          </div>
          <div className=" flex justify-center pt-3">
              <a
                href="https://environmental-conscience.com/fast-food-pros-cons/"
                target="_blank"
                className="py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-green-400 hover:to-green-200 hover:text-black"
              >
                Healthy foods🍽️
              </a>
          </div>
        </div>

        {/* 2 */}
        <div className="items-center rounded-2xl  w-[30%] p-6 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl">
          <div className=" flex justify-center">
            <img className=" h-52 w-auto" src={Track} alt="" />
          </div>
          <div className=" items-center">
            <p className=" text-xl flex justify-center font-semibold text-red-400">
              Track your Health
            </p>
            <p className=" text-base pt-3">
              With amazing inbuilt tools you can track your progress.
            </p>
          </div>
          <div className=" flex justify-center pt-3">
              <a
                href="https://environmental-conscience.com/fast-food-pros-cons/"
                target="_blank"
                className="py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-green-400 hover:to-green-200 hover:text-black"
              >
                Track🏃
              </a>
          </div>
        </div>

        {/* 3 */}
        <div className="items-center rounded-2xl  w-[30%] p-6 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl">
          <div className=" flex justify-center">
            <img className=" h-52 w-auto" src={Recipe} alt="" />
          </div>
          <div className=" items-center">
            <p className=" text-xl flex justify-center font-semibold text-red-400">
              Healthy recipes
            </p>
            <p className=" text-base pt-3">
              Browse thousands of healthy recipes from all over the world.
            </p>
          </div>
          <div className=" flex justify-center pt-3">
              <a
                href="/recipe"
                target="_blank"
                className="py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-green-400 hover:to-green-200 hover:text-black"
              >
                Search recipes👨‍🍳
              </a>
          </div>
        </div>
      </div>

      {/* <div className=" pt-[10%] mx-20">
        <div className=" bg-red-300 w-full rounded-lg">
          <p className=" text-3xl font-medium p-2 mb-10">Choose your favorite:</p>
        </div>
        <div className=" flex justify-center space-x-16">
        <div className="items-center rounded-2xl p-6 bg-red-600 hover:bg-red-300  w-[10%]  shadow-2xl">
          <div className=" flex justify-center">
            <img className=" h-28" src={Fruit} alt="" />
          </div>
          <p className=" flex justify-center pt-2">Fruits</p>
        </div>
        <div className="items-center rounded-2xl p-6 bg-green-600 hover:bg-green-300  w-[10%]  shadow-2xl">
          <div className=" flex justify-center">
            <img className=" h-28" src={Veg} alt="" />
          </div>
          <p className=" flex justify-center pt-2">Vegetables</p>
        </div>
        <div className="items-center rounded-2xl p-6 bg-yellow-400 hover:bg-yellow-100  w-[10%]  shadow-2xl">
          <div className=" flex justify-center">
            <img className=" h-28" src={Fruit} alt="" />
          </div>
          <p className=" flex justify-center pt-2">Fruits</p>
        </div>
        <div className="items-center rounded-2xl p-6 bg-red-600 hover:bg-red-300  w-[10%]  shadow-2xl">
          <div className=" flex justify-center">
            <img className=" h-28" src={Fruit} alt="" />
          </div>
          <p className=" flex justify-center pt-2">Fruits</p>
        </div>
        <div className="items-center rounded-2xl p-6 bg-red-600 hover:bg-red-300  w-[10%]  shadow-2xl">
          <div className=" flex justify-center">
            <img className=" h-28" src={Fruit} alt="" />
          </div>
          <p className=" flex justify-center pt-2">Fruits</p>
        </div>
        </div>
      </div> */}

      <div className=" pt-[10%] mx-20 flex justify-between">
        <div className=" flex justify-between items-center rounded-2xl  w-[45%] p-6 bg-transparent hover:bg-slate-100 backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl">
          <div className=" items-center">
            <p className=" text-2xl font-semibold text-red-400">ARTICLE </p>
            <p className=" text-xl pt-3">
              Wanna know the pros and cons of your favorite
              <span className=" text-red-400 pl-3">Fastfood?</span> 
            </p>
            <div className=" space-x-6 pt-10">
              <a
                href="https://environmental-conscience.com/fast-food-pros-cons/"
                target="_blank"
                className="py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-green-400 hover:to-green-200 hover:text-black"
              >
                Know more
              </a>
            </div>
          </div>
          <img className=" h-52 pr-16 w-auto" src={Burger} alt="" />
        </div>
        <div className=" flex justify-between items-center rounded-2xl  w-[45%] p-6 bg-transparent hover:bg-slate-100 backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl">
          <div className=" items-center">
            <p className=" text-2xl font-semibold text-red-400">ARTICLE </p>
            <p className=" text-xl pt-3">
            Role of <span className=" text-red-400 pl-3">Physical Activity</span> on Mental Health and Well-Being 
            </p>
            <div className=" space-x-6 pt-10">
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9902068/"
                target="_blank"
                className="py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-green-400 hover:to-green-200 hover:text-black"
              >
                Know more
              </a>
            </div>
          </div>
          <img className=" h-52 w-auto" src={Activity} alt="" />
        </div>      </div>
    </div>
  );
};

export default Home;
