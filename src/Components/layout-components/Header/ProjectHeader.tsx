import {DefaultLogo} from 'Components';
import {Link, useNavigate} from "react-router-dom";
import { Avatar, Button, Dropdown, MenuProps, Modal } from 'antd';
import {useEffect, useState} from 'react'
import { UserOutlined } from '@ant-design/icons';
import {logout, getMe} from 'api/auth'
import { User } from 'types/usersTypes';

export const ProjectHeader = () => {
	const navigation = useNavigate()
	const [userInfo, setUserInfo] = useState<User>();

	useEffect(() => {
		getMe().then((res) => {
			setUserInfo(res)
			console.log(userInfo)
		})
	}, [])
  
	const handleLogout = () => {
		logout()
		navigation("/")
	}

	const items: MenuProps['items'] = [
		{
		  label: <div><h3>Имя</h3>{userInfo?.name}</div>,
		  key: '0',
		},
		{
		  label: <div><h3>Email</h3>{userInfo?.email}</div>,
		  key: '1',
		},
		{
		  type: 'divider',
		},
		{
		  label: <Button onClick={handleLogout}>Выйти</Button>,
		  key: '3',
		},
	  ];

  return (
    <header className="bg-white border-b-2">
        <div 
          className="mx-auto flex flex-1 h-16 items-center gap-8 px-4 sm:px-6 lg:px-8 w-full my-2 justify-normal"
        >
            <Link className="block text-teal-600 justify-start" to="/">
              
                <span className="sr-only">Home</span>
                <DefaultLogo width="w-24"/>
            </Link>

            <div className="flex flex-1 items-center md:justify-between">


                <div className="flex gap-4 absolute right-5">
					<Dropdown
						trigger={['click']}
						menu={{ items }}
						// title="ВЫХОД" 
						// open={isModalOpen}
						// onOk={handleOk} 
						// onCancel={handleCancel}
						// okButtonProps={{ style: { backgroundColor: '#1677ff' } }}
					>
						<Avatar
							className='cursor-pointer'
							icon={<UserOutlined className='relative bottom-1'/>} 
						/>
					</Dropdown>
                </div>

            </div>
        </div>
    </header>
    
  )
}
