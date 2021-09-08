import styles from './AdminMain.module.css'
import Link from 'next/link'
import { BsPlusCircle, BsTrash, BsPen, BsArrowRepeat } from "react-icons/bs"
import { IconContext } from 'react-icons/lib'

export default function AdminMain() {
    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.item_container}>
                    <div className={styles.items}>
                        <Link href='/admin/SaveProduct'>
                            <a className={styles.link}>
                                <IconContext.Provider value={{ className: styles.add_icon }}>
                                    <BsPlusCircle />
                                </IconContext.Provider>
                                <h2>Add Product</h2>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.items}>
                        <Link href='/admin/delete'>
                            <a className={styles.link}>
                                <IconContext.Provider value={{ className: styles.add_icon }}>
                                    <BsTrash />
                                </IconContext.Provider>
                                <h2>Delete Product</h2>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.items}>
                        <Link href='/admin/SaveProduct'>
                            <a className={styles.link}>
                                <IconContext.Provider value={{ className: styles.add_icon }}>
                                    <BsPen />
                                </IconContext.Provider>
                                <h2>Edit Product</h2>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.items}>
                        <Link href='/admin/SaveProduct'>
                            <a className={styles.link}>
                                <IconContext.Provider value={{ className: styles.add_icon }}>
                                    <BsArrowRepeat />
                                </IconContext.Provider>
                                <h2>Update Product</h2>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}