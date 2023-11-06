import {DefaultLogo} from 'Components';
import {Link} from "react-router-dom";
import { Avatar, Button, Modal } from 'antd';
import {useEffect, useState} from 'react'
import { UserOutlined } from '@ant-design/icons';
import {logout, getMe} from 'api/auth'

export const ProjectHeader = () => {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		getMe().then((res) => {
			
		})
	}, [])

	const showModal = () => {
	  setIsModalOpen(true);
	};
  
	const handleOk = () => {
	  setIsModalOpen(false);
	};
  
	const handleCancel = () => {
	  setIsModalOpen(false);
	};

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


                <div className="flex items-center gap-4">
					<Avatar
						className=' cursor-pointer'
						onClick={showModal}
					 	icon={<UserOutlined />} 
					/>
					<Modal style={{ top: 5, left: 200, }} 
						title="ВЫХОД" 
						open={isModalOpen} 
						onOk={handleOk} 
						onCancel={handleCancel}
						okButtonProps={{ style: { backgroundColor: '#1677ff' } }}
					>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<Button onClick={() => logout()}>Выйти</Button>
					</Modal>
                </div>

            </div>
        </div>
    </header>
    
  )
}
