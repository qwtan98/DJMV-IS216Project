<template>
    <div
      class="sidebar"
      :class="isOpened ? 'open' : ''"
      :style="cssVars"
    >
    <div
      class="logo-details"
      style="margin: 6px 14px 0 14px;"
    >
    <img
      v-if="menuLogo"
      :src="menuLogo"
      alt="menu-logo"
      class="menu-logo icon"
      style="width: auto; height: 30px"
    >
    <i
      v-else
      class="bx icon"
      :class="menuIcon"
    />
    <i
      class="bx"
      :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'"
      id="btn"
      @click="isOpened = !isOpened"
    />
    </div>
  


      <div style="display: flex; flex-direction: column; justify-content: space-between; flex-grow: 1; max-height: calc(100% - 60px);">
        <div
          id="my-scroll"
          style="margin: 6px 14px 0 14px;"
        >
          <ul
            class="nav-list"
            style="overflow: visible;"
          >
  
            <span
              v-for="(menuItem, index) in menuItems"
              :key="index"
            >
              <li v-if="isOpened == true" :class="isOpened ? 'nav-open': 'nav-closed'">
                <a :href="menuItem.link">
                  <i class="bx" :class= "isOpened ? 'bx-moving ' + menuItem.icon || 'bx-square-rounded' : 'bx-stationary ' + menuItem.icon || 'bx-square-rounded'"
                    @click="isOpened = !isOpened"
                  />
                  <span class="links_name">{{ menuItem.name }}</span>
                </a>
                <span class="tooltip">{{ menuItem.tooltip || menuItem.name }}</span>
              </li>
              <li v-else :class="isOpened ? 'nav-open': 'nav-closed'">
                <a :role="link">
                  <i class="bx" :class= "isOpened ? 'bx-moving ' + menuItem.icon || 'bx-square-rounded' : 'bx-stationary ' + menuItem.icon || 'bx-square-rounded'"
                    @click="isOpened = !isOpened"
                  />
                  <span class="links_name">{{ menuItem.name }}</span>
                </a>
                <span class="tooltip">{{ menuItem.tooltip || menuItem.name }}</span>
              </li>
            </span>
          </ul>
        </div>
        
        <div
          v-if="isLoggedIn"
          class="profile" 
        >
          <div class="profile-details">
            <img
              v-if="profileImg"
              :src="profileImg"
              alt="profileImg"
            >
            <i
              v-else
              class="bx bxs-user-rectangle"
            />
            <div class="name_job">
              <div class="name">
                {{ profileName }}
              </div>
              <div class="job">
                {{ profileRole }}
              </div>
            </div>
          </div>
          <router-link to="/login">
          <i
            v-if="isExitButton"
            class="bx bx-log-out"
            style="margin: 0; font-size: 25px;"
            @click="handleLogout"
            
            id="log_out"
          />
        </router-link>
        </div>
      </div>
    </div>
  </template>
  
<script>
import { signOut } from "firebase/auth";
import { useRouter } from 'vue-router'
import { auth } from "../main.js";


    export default {
      
      name: 'NavigationBar',
      props: {
        //! Menu settings
        isMenuOpen: {
          type: Boolean,
          default: false,
        },

        menuLogo: {
          type: String,
          default: require('../assets/ui/mikro_logo_trim.png'),
        },
        menuIcon: {
          type: String,
          default: 'bxl-c-plus-plus',
        },
        isPaddingLeft: {
          type: Boolean,
          default: true,
        },
         menuOpenedPaddingLeftBody: {
          type: String,
          default: '250px'
        },
        menuClosedPaddingLeftBody: {
          type: String,
          default: '78px'
        },
  
        //! Menu items
        menuItems: {
          type: Array,
          default: () => [
            {
              link: '/home',
              component: 'Home',
              name: 'Home',
              tooltip: 'Dashboard',
              icon: 'bx-grid-alt',
            },
            {
              link: '/lessons',
              component: 'Lessons',
              name: 'Academy',
              tooltip: 'Book',
              icon: 'bx-book',
            },
            {
              link: '/progress',
              name: 'Progress',
              tooltip: 'Messages',
              icon: 'bx-pie-chart-alt-2',
            },
            {
              link: '/articles',
              component: 'Article',
              name: 'Articles',
              tooltip: 'Book',
              icon: 'bx-heart',
            },
            {
              link: '/conversion',
              component: 'Conversion',
              name: 'Conversion Rates',
              tooltip: 'Book',
              icon: 'bx-money',
            },
            {
              link: '/settings',
              name: 'Settings',
              tooltip: 'Settings',
              icon: 'bx-cog',
            },
          ],
        },
  
        //! Search
        isSearch: {
          type: Boolean,
          default: true,
        },
        searchPlaceholder: {
          type: String,
          default: 'Search...',
        },
        searchTooltip: {
          type: String,
          default: 'Search',
        },
  
        //! Profile detailes
        profileImg: {
          type: String,
          default: require('../assets/ui/chatur.webp'),
        },
        profileName: {
          type: String,
          default: 'Chatur Ramalingam',
        },
        profileRole: {
          type: String,
          default: 'Migrant Worker',
        },
        isExitButton: {
          type: Boolean,
          default: true,
        },
        isLoggedIn: {
          type: Boolean,
          default: true,
        },
  
        //! Styles
        bgColor: {
          type: String,
          default: '#11101d',
        },
        secondaryColor: {
          type: String,
          default: '#1d1b31',
        },
        homeSectionColor: {
          type: String,
          default: '#e4e9f7',
        },
        logoTitleColor: {
          type: String,
          default: '#fff',
        },
        iconsColor: {
          type: String,
          default: '#fff',
        },
        itemsTooltipColor: {
          type: String,
          default: '#e4e9f7',
        },
        searchInputTextColor: {
          type: String,
          default: '#fff',
        },
        menuItemsHoverColor: {
          type: String,
          default: '#fff',
        },
        menuItemsTextColor: {
          type: String,
          default: '#fff',
        },
        menuFooterTextColor: {
          type: String,
          default: '#fff',
        },
      },
      data() {
        return {
          isOpened: false,
          router: useRouter()
        }
      },
      methods: {
        handleLogout() {
            signOut(auth).then(()=> {
                this.router.push('/login');
            })
        }
      },

      mounted() {
        this.isOpened = this.isMenuOpen
      },

      computed: {
        cssVars() {
          return {
            // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
            '--bg-color': this.bgColor,
            '--secondary-color': this.secondaryColor,
            '--home-section-color': this.homeSectionColor,
            '--logo-title-color': this.logoTitleColor,
            '--icons-color': this.iconsColor,
            '--items-tooltip-color': this.itemsTooltipColor,

            '--menu-items-hover-color': this.menuItemsHoverColor,
            '--menu-items-text-color': this.menuItemsTextColor,
            '--menu-footer-text-color': this.menuFooterTextColor,
          }
        },
      },
      // watch: {
      //   isOpened() {
      //     window.document.body.style.paddingLeft = this.isOpened && this.isPaddingLeft ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody
      //   }
      // }
    }
  </script>
  
  <style>
    /* Google Font Link */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
    @import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    #btn 
    {
      margin: 0;
    }

    body {
      transition: all 0.5s ease;
    }

    .menu-logo {
      width: 20px;
      margin: 0 10px 0 10px;
    }

    .options {
      text-align: center;
    }
    
    .options button
    {
       font-size: 10px;
       width: 55px;
  
    }
    

    .sidebar {
      position: relative;
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      min-height: min-content;
      /* overflow-y: auto; */
      width: 55px;
      background: var(--bg-color);
      /* padding: 6px 14px 0 14px; */
      z-index: 99;
      transition: all 0.5s ease;
    }

    .sidebar.open {
      width: 240px;
    }
    .sidebar .logo-details {
      height: 60px;
      display: flex;
      align-items: center;
      position: relative;
    }
    .sidebar .logo-details .icon {
      opacity: 0;
      transition: all 0.5s ease;
    }
    .sidebar .logo-details .logo_name {
      color: var(--logo-title-color);
      font-size: 20px;
      font-weight: 600;
      opacity: 0;
      transition: all 0.5s ease;
    }
    .sidebar.open .logo-details .icon,
    .sidebar.open .logo-details .logo_name {
      opacity: 1;
    }
    .sidebar .logo-details #btn {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      font-size: 22px;
      transition: all 0.4s ease;
      font-size: 23px;
      text-align: center;
      cursor: pointer;
      transition: all 0.5s ease;
    }
    .sidebar.open .logo-details #btn {
      text-align: right;
    }
    .sidebar i {
      color: var(--icons-color);
      height: 60px;
      min-width: 30px;
      font-size: 28px;
      text-align: center;
      line-height: 60px;
      margin-right: 10px;
    }
    .sidebar .nav-list {
      margin-top: 20px;
      /* margin-bottom: 60px; */
      /* height: 100%; */
      /* min-height: min-content; */
    }

    .sidebar ul {
        padding: 0;
    }

    .sidebar li {
      position: relative;
      margin: 8px 0;
      list-style: none;
    }
    .sidebar li .tooltip {
      position: absolute;
      top: -20px;
      left: calc(100% + 15px);
      z-index: 3;
      background: var(--items-tooltip-color);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 15px;
      font-weight: 400;
      opacity: 0;
      white-space: nowrap;
      pointer-events: none;
      transition: 0s;
    }
    .sidebar li:hover .tooltip {
      opacity: 1;
      pointer-events: auto;
      transition: all 0.4s ease;
      top: 50%;
      transform: translateY(-50%);
    }
    .sidebar.open li .tooltip {
      display: none;
    }
    .sidebar input {
      font-size: 15px;
      color: var(--serach-input-text-color);
      font-weight: 400;
      outline: none;
      height: 50px;
      width: 100%;
      width: 50px;
      border: none;
      border-radius: 12px;
      transition: all 0.5s ease;
      background: var(--secondary-color);
    }
    .sidebar.open input {
      padding: 0 20px 0 50px;
      width: 100%;
    }

    .sidebar li a {
      display: flex;
      height: 100%;
      width: 100%;
      border-radius: 12px;
      align-items: center;
      text-decoration: none;
      transition: all 0.4s ease;
      background: var(--bg-color);
    }
    .sidebar li.nav-open a:hover {
      background: var(--menu-items-hover-color);
      transform: translateX(15%) scale(1.15);
    }
    .sidebar li.nav-closed a:hover {
      background: var(--menu-items-hover-color);
    }
    .sidebar li a .links_name {
      color: var(--menu-items-text-color);
      font-size: 12px;
      font-weight: 400;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: 0.4s;
    }
    .sidebar.open li a .links_name {
      opacity: 1;
      pointer-events: auto;
    }

    /* <!-- Animation --> */
    .sidebar li a:hover .bx-moving.bx-grid-alt,
    .sidebar li a:hover .bx-moving.bx-pie-chart-alt-2,
    .sidebar li a:hover .bx-moving.bx-cog,
    .sidebar li a:hover .bx-moving.bx-money {
      transition: all 0.5s ease-in-out;
      transform: translateX(15px) rotate(180deg);
      color: var(--bg-color);
    }
    .sidebar li a:hover .bx-moving.bx-heart,
    .sidebar li a:hover .bx-moving.bx-user,
    .sidebar li a:hover .bx-moving.bx-book,
    .sidebar li a:hover .bx-moving.bx-chat {
      transition: all 0.5s ease;
      transform: translateX(15px) scale(1.25);
      color: var(--bg-color);
    }

    .sidebar li a:hover .bx-stationary {
      transition: all 0.5s ease-in-out;
      transform: rotate(180deg);
      color: var(--bg-color);
    }
    .sidebar li a:hover .bx-stationary.bx-heart,
    .sidebar li a:hover .bx-stationary.bx-user,
    .sidebar li a:hover .bx-stationary.bx-book,
    .sidebar li a:hover .bx-stationary.bx-chat {
      transition: all 0.5s ease;
      transform: scale(1.25);
      color: var(--bg-color);
    }

    .sidebar li a:hover .bx-moving i,
    .sidebar li a:hover .bx-moving ~.links_name {
      transition: all 0.5s ease;
      transform: translateX(15px);
      color: var(--bg-color);
    }
    
    #btn.bx.bx-menu::before {
      margin-left: 20px;
    }
    .sidebar li i {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      border-radius: 12px;
    }
    .sidebar div.profile {
      position: relative;
      height: 60px;
      width: 55px;
      /* left: 0;
      bottom: 0; */
      padding: 10px 14px;
      background: var(--secondary-color);
      transition: all 0.5s ease;
      overflow: hidden;
    }
    .sidebar.open div.profile {
      width: 240px;
    }
    .sidebar div .profile-details {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
    }
    .sidebar div img {
      height: 45px;
      width: 45px;
      object-fit: cover;
      border-radius: 6px;
      margin-right: 10px; 
    
    }
    .sidebar div.profile .name,
    .sidebar div.profile .job {
      font-size: 15px;
      font-weight: 400;
      color: var(--menu-footer-text-color);
      white-space: nowrap;
      pointer-events: none;
    }
    .sidebar div.profile .job {
      font-size: 12px;
    }
    .sidebar .profile #log_out {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      background: var(--secondary-color);
      width: 100%;
      height: 60px;
      line-height: 60px;
      border-radius: 0px;
      transition: all 0.5s ease;
    }
    .sidebar.open .profile #log_out {
      width: 50px;
      background: var(--secondary-color);
      opacity: 0;
    }
    .sidebar.open .profile:hover #log_out {
      opacity: 1;
    }
    .sidebar.open .profile #log_out:hover {
      opacity: 1;
      color: red;
    }
    .sidebar .profile #log_out:hover {
      color: red;
    }
    .home-section {
      position: relative;
      background: var(--home-section-color);
      min-height: 100vh;
      top: 0;
      left: 78px;
      width: calc(100% - 78px);
      transition: all 0.5s ease;
      z-index: 2;
      
    }
    .sidebar.open ~ .home-section {
      left: 250px;
      width: calc(100% - 250px);
    }
    .home-section .text {
      display: inline-block;
      color: var(--bg-color);
      font-size: 25px;
      font-weight: 500;
      margin: 18px;
    }
    .my-scroll-active {
      overflow-y: auto;
    }
    #my-scroll {
      overflow-y: auto;
      height: calc(100% - 60px);
    }
    #my-scroll::-webkit-scrollbar{
      display:none;
      /* background-color: rgba(255, 255, 255, 0.2); 
      width: 10px;
      border-radius:5px  */
    }
    /* #my-scroll::-webkit-scrollbar-thumb{
      background-color: red;
      border-radius:5px 
    }
    #my-scroll::-webkit-scrollbar-button:vertical:start:decrement{
      display:none;
    }
    #my-scroll::-webkit-scrollbar-button:vertical:end:increment{
      display:none;
    } */
    /* @media (max-width: 420px) {
      .sidebar li .tooltip {
        display: none;
      }
    } */
  
  
  </style>
