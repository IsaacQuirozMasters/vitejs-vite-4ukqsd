import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <div className="container">
      <nav class="flex items-center bg-gray-800 p-3 flex-wrap">
        <Link to="/" class="p-2 mr-4 inline-flex items-center">
          <span class="text-xl text-white font-bold uppercase tracking-wide">
            Talwind CSS
          </span>
        </Link>
        <button
          class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
          data-target="#navigation"
        >
          <i class="material-icons">menu</i>
        </button>
      </nav>
    </div>
  );
}
