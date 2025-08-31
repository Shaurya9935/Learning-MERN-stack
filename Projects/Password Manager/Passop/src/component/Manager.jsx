import React, { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast, Slide } from 'react-toastify';

const manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }

    }, [])



    const showPass = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text"
        }
    }

    const savePass = () => {
        if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3){

            
            console.log(form)
            setpasswordArray([...passwordArray, {...form, id:uuidv4()}])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]))
            console.log(passwordArray)
            setform({ site: "", username: "", password: "" })
            toast.success('Password saved !', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
        else{
            toast.error('Error: Password not saved !', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
    }

    const deletePass = (id) => {
        let c = confirm("Do you really want to delete this password ?")
        if(c){
        console.log("Deleting password with id ", id)
        setpasswordArray(passwordArray.filter(item=>item.id !==id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id !==id)))
        toast.warn('Password Deleted !', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        });
        }
    }

    const editPass = (id) => {
        console.log("Editing password with id ", id)
        setform(passwordArray.filter(item => item.id === id)[0])
        setpasswordArray(passwordArray.filter(item=>item.id !==id))
        
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast.success('Copied to clipboard !', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        });
        navigator.clipboard.writeText(text)
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Slide}
            />

            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            <div className="p-2 md:mycontainer min-h-[85vh]">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center '>Your Own Password Manager</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input onChange={handleChange} name='site' value={form.site} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full px-4 py-1' type="text" />
                    <div className="flex md:flex-row flex-col w-full justify-between gap-8">
                        <input onChange={handleChange} name='username' value={form.username} placeholder='Enter username' className='rounded-full border border-green-500 w-full px-4 py-1' type="text" />
                        <div className="relative">
                            <input ref={passwordRef} onChange={handleChange} name='password' value={form.password} placeholder='Enter Password' className='rounded-full border border-green-500 w-full px-4 py-1' type="password" />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPass}>
                                <img ref={ref} className='p-1' width={26} src="/icons/eye.png" alt="eye" />
                            </span>
                        </div>

                    </div>
                    <button onClick={savePass} className='flex justify-center items-center gap-2 bg-green-500 w-fit rounded-full px-8 py-2 hover:bg-green-400 border-green-900 border'>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Save Password
                    </button>
                </div>
                <div className='Passwords'>
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Passwords</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='text-center py-2 border border-white'>
                                        <div className='flex items-center justify-center'>
                                            <a href={item.site} target='_blank'><span>{item.site}</span></a>
                                            <div className='lodiconcopy size-7 cursor-pointer' onClick={() => copyText(item.site)}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingtop": "3px", "paddingleft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center py-2 border border-white'>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.username}</span>
                                            <div className='lodiconcopy size-7 cursor-pointer' onClick={() => copyText(item.username)}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingtop": "3px", "paddingleft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center py-2 border border-white'>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.password}</span>
                                            <div className='lodiconcopy size-7 cursor-pointer' onClick={() => copyText(item.password)}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingtop": "3px", "paddingleft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center py-2 border border-white'>
                                        <span className='cursor-pointer mx-1' onClick={()=> editPass(item.id)}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => deletePass(item.id)}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}


                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default manager
