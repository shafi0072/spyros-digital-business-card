import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
const Page2 = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  return (
    <div className='mt-6 px-[10%] mb-[10%]'>
      <div className='border-b pb-3'>
        <h1 className="text-md font-bold mb-5">Design</h1>
        <div className='flex'>
          <div className='border-2 border-[#0277B5] h-[120px] p-2 w-[100px] rounded'>
            <div className='w-[100%] h-[50px] bg-[#0277B5] rounded-t-lg'>

            </div>
            <p className="text-center mt-[40%] text-md font-bold">Flat</p>
          </div>
          <div className='border-2 ml-2  h-[120px] p-2 w-[100px] rounded'>
            <div className='w-[100%] h-[50px] bg-[#0277B5] rounded-t-lg'>

            </div>
            <p className="text-center mt-[40%] text-md font-bold">Flat</p>
          </div>
        </div>
      </div>
      <div className='border-b pb-3 mt-5'>
        <h1 className="text-md font-bold mb-5">Color</h1>
        <div className='flex'>


          <div className="color-picker w-[30px]" >
            <label htmlFor="colorPick"><img className='w-[100%]' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ8NDhANDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBonHRUVIjEjJSkrLi4uFyA4OTQtOCgtLysBCgoKDg0OGhAQGislHSAvLSsrKy0rKysrKy8tLSsrOCsrKysrKysrKy0rLSstKy0tKy0rKystKy0vKystLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAwQCBgcFAf/EAD4QAAICAQEFBQUFBQcFAAAAAAABAgMRBAUSEyExBkFRYYEHInGRoTJSkrHRFCMzQmIWQ3LBwuHwFSRTgqL/xAAcAQACAwEBAQEAAAAAAAAAAAADBAACBQYBBwj/xAA6EQACAgACBwUFBgUFAAAAAAAAAQIDBBEFEhMhMUFRYXGBkaEiMrHR8AYjM1LB4RQWcpKiQmKy0vH/2gAMAwEAAhEDEQA/AO4gAEIAABCAAAQgABJfrIx5R95+AvicVThoa9skl28+5cX4Foxcnkismu1lcOr5+C6nm36ic+r5eHQnaOYxX2nzeWGh4y/6r5+AzDDfmZdbtX7kU/NvP0I7No3P+bd+CSFtGDRj26Vxt3vWNdi9lf45erY1Cmtcj5PVXPrOb9Sebb6vPxeRzQtoXcrJ+9JvvbYxHJcBPNdG18GZLV2x6WWL4TaPskLki8HOHutrubXwYRZMdHaupj/eZ8mkyqrtHNfbrUvOLaf1yeXJCpIdq0hjKvdsl4vW/wCWZHh6Z8Yr4fDI2vTba09nLecH4WLdXz6HpRkmsppp9GuaZz2SM9LrbqOdc3HxXWL+OeRsYfT81uuhn2x+T+a7hazRkX+G/B/WfozoIGu6DtNCWI3rhv76y4P06r6nvVzjJKUWpRaypJppryZv4fFVYiOtVLP4rvXEzLaLKnlNZfAYAAMAgAAIQAACEAAAhAAAIQAACEATddGtZk/9xWt1kalhc5vojyZWym96Ty2YOltNRwn3da1rPSPf29nn2xNZ5FlmplZ5R8BLRjBjUcNddbiLNpbJuXb8Oxdi3DlclluFNGLQ5oxaLRgGTENGLQ5owaGI1l0xLQuSHtGDQZVhExEkLkiiSFyQTUCRZNJC5IokhUke6gaLJ5ITJFMkKkibMPFks0P2ftS7TSzCXut5lXLnCXp3PzQuaETRaDnXJSg8muaDaqmtWSzRvmydsU6pYi92xLMq5P3l5rxR6hylWShJTi3GUXmMovDTNy7Pdoo6jFVuI39E+kbf0l5fLwOowGk1b93bul15P5P48uhi43RrrTsq3x5rmvmvrtNkAANgyQAAIQAACEAAAhAIdo65Uxwuc5L3UN1uqjTW5y7uSXi+5GqztlOTnJ5beX+hiaY0n/Cx2dfvy/xXXv6efY1r71D2Vx+BRvuTbby3zbfeNgyaDHwZw+o282DrsKYMdBk8GOgy6rH67BrRi0ZxPrQaNY2pCWjBoc0YtDEYF1IQ0YND2jBoOqwiZPJC5IokhckEVYWMieSFSRTJCpI92YWLJpITNFMkImiagxFk00TzRVNE1iK6gzAlmieeVzXJrmmuTTKrCawq4IbgzduyvaD9oXAuf76K92T/AL2K/wBS+vXxNoONcSUJKUW4yi1KMk8OMl0aOldmNsrWU88K6vEbYrv8Jryf55Ok0bjnYtlZ7y4PqvmvU5/Smj9l99WvZfFdH17n6PvR7YABrGKAABCAAHidpNfwquHF+/blJ+EVjPzA4i+NFUrZ8F69ni9wK66NUHOXBfWXieTtjX8e3l/DhlQ80+r9f0J4MlgyiDPn1s53WOyfF739dnA51XucnKXFlUGPgyWDHwZ7GA9XYVQY6DJoMogwirH67CiDG4EQY+DCqsfrmYtGDQ5oxaDxrDpiWjBoe0LaGIwLpiJIXJFEkLkgmzCxZNJCpIpkhMkTUDRZNNCJoqmieaPNQYiySxE9hVYiewrqDcGSWE1hVYTWFHEbgS2Ddj7Sno9RC6PNLlOP/krf2o/870hVhLYVjnCSlHihtQjOLjJZp7mjtOlvhbXC2DzCyKnF+MWh5ons72xne0U303rKc/8A1D/V+I3s6vDXbatT8+84fG4V4W51vhyfVcvk+1MAAA4oBz/a+u4+olPOYZSrXgun1Nr7QargaSya+00oRXflvDx6fkaFWznNPX5uFK/qfwX6+hzunMVlKFK/qfwX6+jLIMogyODKIMwYwMuqwrgyiDJIMogw0YGhXYVQY+DJYMogw8YD9dhTBj4Mmgx8GFjWaFcx6Bo+QYzAWMByMsxLRg0PaMGhiMAqkIkhckUSQqSCagWMiaSEzRVNCJo81A8WSzRNYiqwnsKuA1AksJrCqwlsKOA5WS2E1hTYS2FHEcrJrCSwqsJLQUojtYaHWT099d0Mb1c1PHTOOsfg1lep2rS3xtrhbDnG2EbIv+mSyjhdjOmezTX8XRSpbzLTWbvwql70frvr0NHRlmrNw67/AB/8Mn7QYXWojcuMXk+5/J/Fm4AAG2cgah261OODUn1U5TXiuWPyZrMGel2qt39dau6G4l+GOfrk86KOOxz2mJnLty8t36Hz7SVztxlku3L+32f0z8R0JFEGTwQ6CAxgVrkyqDKIMkgPgw8YD9dhZBlEGRwZRBh4wNGuwrgx8GSwY+DDRgP12FUGPiTQY+DDRrNCuZm0YNDUfGg0YDKkTyQuSKJIVNBNQLFks0T2FVhNYeOAzAlsJ7CmwlsKOI5WS2EthTYyWxg3EdrJbCWxlNrJLWDlEerRNYySxlNrJLWClEdrRPYzZfZnreHtB1N8r6rILHTfXvp/KMvmavax/Z/VqnXaaxvCjfS3/gc0n+bJU9SyMujQXE07bDzr6p+eWa9cjvQAB0p8yzOabYlvam2XjNv0EwR8m96Tl955+YyCOTcM5N9T5jKevZKXVt+bZnBDoIwgh0EXjWM1mcEOgjCCHQQaNQ7WZwQ+AuCHQQaNY5WNgx8GJgh0EGjWPVsogx8GTQQ+AWMB6uZTBmbQqDHRDRgPwmLkhFiKpomsCagxBkthLYU2sktYNxHa0T2MktZRayS1g5RHa0T2sktZRayO2QKUR+tCLWSWsfbIktkClEeriItZJax9siS2QNxHq0ItZLKeHkbbIlsYGUTQqR3D+00PL6AcZ/6tPxYGh/GyOb/luBvG7hteDwNgh+1Ibuptj4TaEwFVUfnZx1JuPRteTyGwQ6CFQHwDRrGq2Mgh0EKgOgFjWOVsbBDoIVAdANGsdrY2CHQQqA6IWNY7XIbAfETEdELGscrkOgMUsCN/BhK0Kqx2tlEp5J7BfFMJWF9lmPVsXaiS1FU5Eth46Mx+sktRHai20ktBSw49WRWoktRbaSWoHLDj1bIrUR2outRJagUsOP1shtRJai61ElqBSw49WyG1ElqLbUTSjmS+KBSw4/Ww/YZ+D+QHX/7Kf0/QD3+EML+YayTtHVu6y3uUnBrz91N/XJFA9/tjX79VnjGcfVNY/M8GIZ1+0z876Tr2WNtj/ub/ALva/UbAdAVAdEJGsHXIbAdEVEbELGsdhIdAdETEbELGsbrkPiOiIiNTDKschIdFmTsJ3YYOwIoDtZQ7BU7RErBM7QkazQrZRxQdpC7Q4oTZj1bKpWC5TEOwXKwsoD9bG2MksMpWCZzL7JM0K2JtJLCqxklhV4cerJbSS0rsJLQTw49WSWktpXaSWgnhx6sjtQzYulV+soqxlWX0xflFzSf0yYWmyezXRcbaUbG/dorna13ZxupfOefQBZTkmwuIu2NE7Pypvxy3ep2EAABkfLsjy+0Gmdulko9YuMo/P9GaVE6PJJpp801hrxRoO0NLwLp190WsPxT55PVHNnH/AGnw2rOGIXP2X4b157/IwiOiJgNiGjWc5CQ6I6ImI2IZVjkJDojoiIsz3wsaxqEh6lg+Owndhg7AigP1FLsFysJ5WC5WF1A0a2UStETtEztETtCxrH62OdvMOKQyt5grQuzHK2XcUxdhJxTF2nuzNCtlMrBcrCd2GErC6gP1SHSsEzkLlYKlYEUDRqkFjJbBkpiZyLbFM0KyewksKrCWwpLDj1ZJYdN9l+zeFprNQ1iWosUY5XWuC6r/ANm/wnOdJppXWwrgsuycIJeLk8I7lszRx01FdEecaoRgnjG80ucn5t5fqZekEq4qPN/BfuZH2hxWphlSuM3v7l++XkywAAyjiwPA7UaPfrVy618pecZNJfJ/me+LnFSTi1lNYafRp9x7F5PMVxuFjiqJUy5rj0fJ+DOfxGxHbT0b09rjz3f5JfeXf+giJpwgms0fMbK50zddiyknkx8RsWIUj47AyrD1yzKXYYOwndhg7C6gaFRS7DB2E7sFysLqBo1FErBcrSeVgqVoRVmhWyidpNZaKnaT2Who1jtbHTtPitIbLT4rQ+zHa2ehxT47SLihxTzZj9bK3aYuwldpg7CyrH62UysFSsEOwXKwuoGhWx8rBMpipWC5WBYwNGqQycxFjMJWFGytFPV310Vx3nOaXlFd7fklll9VJZvgjQhNJZyeSXM272abG3rJaycfdrzCrPV2NJuXonj18jpJFsvRQ01NdEPs1xUU+WZPvk/NvL9S04vF4jb2ufLl3fW84PSGMeKxErOXBLol9Z+IAACwkAABCEG1NEtRXu9JL7EvB/8AEabZFwbjJYlFvKfVM6CeJt7ZXGjxK1++iun3/Icwl6g9WXB+hzmndEvEx29S9uK3r8y+a5dVu6GrOwxdhPKeHh8muTT6pmDsNpQOOq4FDsMXYTOwwdhZQNKsodguVhPKwXKwIoGhWUSsEztEStEztCxrH62PnaT2WiZ2k9loeNY7BjbLTFWkdlpirQ6rHa2ehxQ4pCrT7xDzZj1bLXaYuwj4p8dp7sx+tlTsMHYTOwwdhZVj9bKJWC5WCJWGDnkIoGhUx6k28Lq+R1zsN2e/YqeLav8AuLoreTXOuvk9z455v0XceH7PuyTio67VR97lPT1yXTvVjXd5L18Do5zWmNIKX3FT3L3n17O5c+r3ct+TpXSOuthW93+p9ezuXPr4AAAc+YQAAEIAABCAAAQhr/aHYavTtqSVy5td1nr3PzNEtcoycZJxlF4lGS5p+DR1s8fbewqdWsv3LUsRsiufwa70aWDx2zyhZ7vJ9P2MDSehVc3dRunzXKXyfo3x6nN3YYSsH7X2ZqNHPdtjhP7MlzhL/D+nU8yVh0EEprWjvT5nOqMoScZLJrkyiVgqVgiVgqVoeNY5Wx8rRM7RE7RM7Qsax6tjp2k9loqdpPZaHjWPVsZZaLVpLZaLVowqxytnoK0y4p56tMuKTZj9bLuKfHaRcUOKebMerZY7TB2krtK9k7N1OttVWnrnZN/d+zFfelLpFebI4qKbfBD1cklmzHfb5LmzpfYfsLu7uq10fe5Sr001071OxPv/AKfn4Hrdj+w1Og3br92/V8mnjNVL/oT6v+p+iXfuhy2k9MqadWGe7nLr2Lou3i+WXNXE6QbWpXw5v5dO8AADnDLAAAhAAAIQAACEAAAhAAAIQRqdPXdB12wjZCXWM0mmaVtvsHnM9HLHfwbH18oz/wAn8zfAGMPiraHnB+HJ+AviMJVesrI59vNdzOEbR0t+mnw767K5+E1jPmn0a80QytO+6vTVXQddsIWwfWFkVOPyZqW1vZ3orsyplZppPw/e1/hk8/Jm/htN0y3WpxfVb1815MyLNETg863mu3c/k/Q5TO0TO023aXs42lVl1cLUx7uHYq5484zwvk2avr9h7Q0+XdpdRCK6ydM3D8SWPqblF9Fv4c0/Hf5cfQEqbIe9FrwI52k1loqywnnaaMamuKD1sZZaJVoi20Sp/EPGvcO1s9BWmStPuz9ia7UpOnS6m5S6ShRZKPx3ksG1bK9lu2NRh2Qq0q5c77VnHlGG8/ngWuvop/EnFd7WflxHa5I1XijtFprr7FXVCy2cukK4uc36I61sX2RaOrEtXdbqpd8IJUVfB4zJ+jRvey9labRw4empqohyyq4KLl5yfWT82YeK+0WGhupTm/Jeu/08RpXZcEcu7Ney2+xqzXz4EOT4FbU7peUpY3Y+mX8DqOydlafR1KrT1wqh3qK5yfjKT5yfmy8Dl8ZpG/Fv7x7vyrcv373myk7ZT4sAABEGAABCAAAQgAAEIAABCAAAQgAAEIAABCAAAQgAAEPUaj226P4f5HDNv/xJfEAO0+z3uCGK4nnaD+Ivijt3YD+X0ABrT/4J7hzogABwA6AABYgAAHhAAAIQAACEAAAhAAAIQ//Z" alt="" /></label>
            <input type="color" id='colorPick' style={{ display: 'none' }} onChange={handleColorChange} />
          </div>
          <div className="color-picker w-[30px] ml-2" >
            <label htmlFor="colorPick"><img className='w-[100%]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAe1BMVEX//wD///////v///3///j//xH//9j//2z//+////b//zn//y///7n//+L//6r//0L//+j//33//8H//9z//5L//0r//13//4n//7D//1T//8X//1r//yf//3T//7f//53//3n//87//5n//2X//47//6T//4P//8z//9Qjux9BAAAGoklEQVR4nN2di5qqIBCA0SLL7laudXSr3a3d93/Cg1l5AwVFh/F/gJr/k8uAyBCrGzbe19bxj2t3HlJCaDh310ff2X55m47+kOj+QXsSfPguC14Edf2PYGLr/l+tImNvuxYb5FlvvZnO/9YmMl7IS3Qho0dkHBxVJZ7QYzDWEoIGkdHCr+gSEi7fi5EBIienlcXTxfmFFdldwvYWCeFlByZybdoxBBz/QES8g16NmIPXu0jg6teIcT/7FBnd5t1oxMxXjcawJiKeth7OJzz1IrL5161GjK+eWqqK2D8apo166F41q1QUOXXcqlJU25eSSB+tKkWtfamILHppVSl00YmI7fSrERPJ9xRpkV2HU4eY+VK3SNBzs3pBZWd6OZHxN4xGjCPXvKREdr0NujzmUvm9jIgH1KxeUJmcWEJkBasRs9Ihcoe2iPlpLTIC7OZZnLrcvkZk1sEysBmHml2japEpyCzIx502F5mCDrtFwkqTKpGZQc8jZl61v1ohYivv5XbNumKSF4uMNO9a6eAoHrvEIgBZez2RusgHdMx89qoiN+iIRYiyFYHIJ3S8YgTrX77IDjjfrYLyF41cEduwCSSPyx26uCIRdKzVbGVFPOhI6+AttDgiU4M7SALlZF0cEWMydzEHGZE9dJQyfNWLTKBjlGNSK9LRKzXduHUixqYmRYqpSkFkZvyI9YLOKkUMnwqzRFUiSHp6wq5CBElPT1iLRQzYHFVhJRLB09MTcv09K2Lo6lbMB19kjOyBsEdic0W+oONS58wTGRm1PypHOOKIBNBRNSHgiBi9ThfhlkWMX9/y+S2JIFgX8jgURVBlWVkmBREjt6xlcPIiNrrJ8MVrUnyKGLzXW8dnTqTXE2V68bMiM+hoWvDMgRMRNFsOPG4ZEaSTSMIhFdlAx9KO6VvkBzqUduzfIsa9UFfj8BKxoSNpi/0UQZr4ppyeIlvoQNpyf4qg2pbjsU5ExtBxtMd+iCygw2iP9xC5QIfRnvtDBH0XeXQSgjrzfROLXKGD0MGViaBO4V+smIgRJ63bcmciiFe5KT4TQblVWsRlImg3grJQiyBfHb6YEvQ5fMKJIHxPxeNMBjH6svGXIDq0UcWFGPLFTlscMoj5kM2IBPUmY8qRDGA1ErMmg8hQCNNAeEyAR0gGkWqRoWgMSGQwKnQ4IoMZtQYyj7gE+duqF+uh5FqH4WS/g1mPDGSFGBF0p5b5/BCUh0vLfJI/6BD0MCHoTwsk2MQaRI4SWgT7QZSEAxNBe740S8REUHwJWscXE0F8wDRlwUR20EHoYBkfGBjAGpE+Tj4MIP/1HyIDeNVzfoig/VAhZZccPEPfSejzBB36TuI/RdB3kvNTBH0n2b0OMCPvJPR9Ehv5BoTzFkF+PNN7i4xQty06Sr8fQb0miTIfwpygg2nDb/ZjMcRtK8x99XaBDqc525wI4jOzu5wI3k2huZUXQXts66MgMoUOqCnTggjWqeT18XQqsoQOqRmbkojlQ8fUhG+rLIJyVTLhiFgG3u9bx9HiifxCh6XOH1cE3wuG7A1bWRF06ytPIILtkeTuz8yJINuYXwpFcH21e7fEIpjuCgvtChFMr68Kl/4WrwBFMyserWoRLLkjLZYdK90ui+SQTalETElkhOLUf/mm8vINzEsEI1epYXHvxEYwcnHKjfGuWzf+UB2v5gVPxOyL/FkH4dVT4d7kb3JpBVFxBX6RCKPPBwbckAVlOwx+h+XwIxaIjI2dTUQFh0QVYUwqxZVFWAJKWKNnY2SHD4WVXcVVkyYGmlBxjceKglwGbg9dxdFWlUgzLlepKoRaWbTuDB15nltVrNVlBI06gSqsxSUhYtI1NjV1Q+tKbZqy+1hbybW2+OmvEaMwvdbFWV/F1YRUuGL+kBexNuCvrsXzuZKINQXOIGvKnsqLWGPQV75yVbQly5qvwDqKbF1z2frsMHXmFSrNy4oANa9Irji7ighbyPfevKigGmVLEWvZ8+jlyjYrVRFrdO7xodBzXQHw5iJsSumtpzgyk0dzEcu69tK+3KtqXMoifbQvxVbVUKT79qXaqhqLWNakw53I7/pMV58IS4mjThoYjSQSXa0irIHdtavQe5NG1VbEsmZ7rSuVcD9uEUwbETaCLXxNj4X6C/WRSp8IY3bTcLPK4Sbam+5PhLHZt5ok3X3znpGiQ4SxWTmNFixzZ9V0mCqgSSRmGkRKT8aNPnU8iicaRWJmi/tRYigLj/dF616RR7NIwiS4/xO0tPm/e1Aqt6yD/9NlSYBfMtCFAAAAAElFTkSuQmCC" alt="" /></label>

          </div>
          <div class="rounded-full w-[30px] h-[30px] bg-[#0077B5] ml-2"></div>
          <div class="rounded-full w-[30px] h-[30px] bg-[#1A7C16] ml-2"></div>
          <div class="rounded-full w-[30px] h-[30px] bg-[#EB531B] ml-2"></div>
          <div class="rounded-full w-[30px] h-[30px] bg-[#E31BEB] ml-2"></div>
          <div class="rounded-full w-[30px] h-[30px] bg-[#1D15F7] ml-2"></div>
        </div>
      </div>
      <div className='border-b pb-3 mt-5'>
        <h1 className="text-md font-bold mb-5">Profile Photo</h1>
        <div className='flex items-center'>
          <div className='p-3 border-2 w-[10%] rounded'>
            <img className='w-[100%]' src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg" alt="" />
          </div>
          <div className='flex ml-[10%] bg-gray-200 px-3 py-1 rounded-full'>
            <AddIcon sx={{color:'#0077B5'}}/>
            <p className="text-md">Add Photo or a Video</p>
          </div>
        </div>
      </div>
      <div className='border-b pb-3 mt-5'>
        <h1 className="text-md font-bold mb-5">Logo</h1>
        <div className='flex items-center'>
          <div className='p-3 border-2 w-[10%] rounded'>
            <img className='w-[100%]' src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg" alt="" />
          </div>
          <div className='flex ml-[10%] bg-gray-200 px-3 py-1 rounded-full'>
            <AddIcon sx={{color:'#0077B5'}}/>
            <p className="text-md">Add a Logo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;