import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/footer/Footer'
import MenuAtHomeCoffee from './MenuAtHomeCoffee'
import MenuDrinks from './MenuDrinks'
import MenuFoods from './MenuFoods'
import MenuMerchandise from './MenuMerchandise'
import ModalViewItem from './ModalViewItem'
import ModalCart from './ModalCart'
import Toast2 from '../../partials/Toast2'

const Menu = () => {
    const [menuTab, setMenuTab] = React.useState('drinks')
    const [isModalShow, setModalShow] = React.useState(false);
    const [isCartShow, setCartShow] = React.useState(false);
    const [subItem, setSubItem] = React.useState([]);
    const [cartItem, setcartItem] = React.useState([]);
    const [success, setSucccess] = React.useState(false)

    const handleChangedMenu = (menu) =>{
        setMenuTab(menu)
    }


  return (
    <div>
      <Header setCartShow={setCartShow} cartItem={cartItem}/>
      <div className="container">
        <div className='grid grid-cols-[20%_1fr] gap-5 my-20'>
            <aside>
                <ul className='space-y-5'>
                    <li><button className={`font-bold ${menuTab === "drinks" ? "text-accent" : ""}`} onClick={() => handleChangedMenu("drinks")}>Drinks</button></li>
                    <li><button className={`font-bold ${menuTab === "foods" ? "text-accent" : ""}`} onClick={() => handleChangedMenu("foods")}>Food</button></li>
                    <li><button className={`font-bold ${menuTab === "ahcoffee" ? "text-accent" : ""}`} onClick={() => handleChangedMenu("ahcoffee")}>At Home Cofee</button></li>
                    <li><button className={`font-bold ${menuTab === "merchandise" ? "text-accent" : ""}`} onClick={() => handleChangedMenu("merchandise")}>Merchandise</button></li>
                </ul>
            </aside>

            <main>
                <h2>Menu</h2>
                {menuTab === "drinks" && <MenuDrinks setModalShow={setModalShow}  setSubItem={setSubItem}/>}
                {menuTab === "foods" && <MenuFoods  setModalShow={setModalShow}  setSubItem={setSubItem}/>}
                {menuTab === "ahcoffee" && <MenuAtHomeCoffee setModalShow={setModalShow}  setSubItem={setSubItem}/>}
                {menuTab === "merchandise" && <MenuMerchandise setModalShow={setModalShow}  setSubItem={setSubItem}/>}
            </main>
        </div>
        </div>
      <Footer/>
      {isModalShow && <ModalViewItem setModalShow={setModalShow} subItem={subItem} setcartItem={setcartItem} cartItem={cartItem} setSucccess={setSucccess}/>}

      {isCartShow && <ModalCart setCartShow={setCartShow} cartItem={cartItem} setcartItem={setcartItem}/>}

    {success && <Toast2 setSucccess={setSucccess}/>}


    </div>
  )
}

export default Menu
