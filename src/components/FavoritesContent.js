import React from 'react';
import TheConfessions from '../images/favorite_page/st_augustine.jpg';
import HpBook from '../images/favorite_page/hp.png';
import DomCasmurro from '../images/favorite_page/dom_casmurro.jpg';
import FavoriteGallery from './favorite-content/FavoriteGallery';

import Naruto from '../images/favorite_page/naruto.jpg';
import FullMetal from '../images/favorite_page/full_metal_b.jpg';
import CodeGeass from '../images/favorite_page/code_geass.jpg';

import Avatar from '../images/favorite_page/avatar.jpg';
import YourName from '../images/favorite_page/your_name.jpg';
import GreenMile from '../images/favorite_page/green_mile.jpg';

import RickMorty from '../images/favorite_page/rick_morty.jpg';
import TheWitcher from '../images/favorite_page/the_witcher.jpg';
import Arcane from '../images/favorite_page/arcane.jpg';
import FavoriteDisplay from './favorite-content/FavoriteDisplay';

import { FavoriteContentBodys, FavoriteContentTitles } from '../texts/FavoriteContentText';

const favoriteBooks = [{
                            "img" : TheConfessions,
                            "title" : FavoriteContentTitles['books']['confessions'],
                            "body" : FavoriteContentBodys['books']['confessions'],
                        },
                        {
                            "img" : HpBook,
                            "title" : FavoriteContentTitles['books']['harrypotter'],
                            "body" : FavoriteContentBodys['books']['harrypotter'],
                        },
                        {
                            "img" : DomCasmurro,
                            "title" : FavoriteContentTitles['books']['casmurro'],
                            "body" : FavoriteContentBodys['books']['casmurro'],
                        }];
                        
const favoriteAnimes = [{
                            "img" : Naruto,
                            "title" : FavoriteContentTitles['animes']['naruto'],
                            "body" : FavoriteContentBodys['animes']['naruto'],
                        },
                        {
                            "img" : FullMetal,
                            "title" : FavoriteContentTitles['animes']['fullmetal'],
                            "body" : FavoriteContentBodys['animes']['fullmetal'],
                        },
                        {
                            "img" : CodeGeass,
                            "title" : FavoriteContentTitles['animes']['codegeass'],
                            "body" : FavoriteContentBodys['animes']['codegeass'],
                        }];
const favoriteMovies = [{
                            "img" : Avatar,
                            "title" : FavoriteContentTitles['movies']['avatar'],
                            "body" : FavoriteContentBodys['movies']['avatar'],
                        },
                        {
                            "img" : YourName,
                            "title" : FavoriteContentTitles['movies']['yourname'],
                            "body" : FavoriteContentBodys['movies']['yourname'],
                        },
                        {
                            "img" : GreenMile,
                            "title" : FavoriteContentTitles['movies']['greenmile'],
                            "body" : FavoriteContentBodys['movies']['greenmile'],
                        }];


const favoriteShows = [{
                            "img" : RickMorty,
                            "title" : FavoriteContentTitles['shows']['rickmort'],
                            "body" : FavoriteContentBodys['shows']['rickmort'],
                        },
                        {
                            "img" : TheWitcher,
                            "title" : FavoriteContentTitles['shows']['witcher'],
                            "body" : FavoriteContentBodys['shows']['witcher'],
                        },
                        {
                            "img" : Arcane,
                            "title" : FavoriteContentTitles['shows']['arcane'],
                            "body" : FavoriteContentBodys['shows']['arcane'],
                        }];

function FavoritesContent () { 
    return (
        <div className="w-full h-full bg-black text-white flex flex-col relative">  
            <div className='w-full h-1/2 flex flex-row relative'>
                <div className='w-full h-full flex flex-col'>
                    <div className='w-full h-full flex flex-row space items-center justify-center'>
                        <FavoriteGallery images={favoriteBooks} title="FAVORITE BOOKS"/>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <div className='w-full h-full flex flex-col'>
                        <div className='w-full h-full flex flex-row space items-center justify-center'>
                            <FavoriteGallery images={favoriteAnimes} title="FAVORITE ANIMES"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-1/2 relative flex flex-row'>
                <div className='w-full h-full'>
                    <div className='w-full h-full'>
                        <div className='w-full h-full flex flex-col'>
                            <div className='w-full h-full flex flex-row space items-center justify-center'>
                                <FavoriteGallery images={favoriteShows} title="FAVORITE SHOWS"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <div className='w-full h-full'>
                        <div className='w-full h-full flex flex-col'>
                            <div className='w-full h-full flex flex-row space items-center justify-center relative'>
                                <FavoriteGallery images={favoriteMovies} title="FAVORITE MOVIES"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FavoriteDisplay/> 
        </div>
    );
}

export default FavoritesContent;