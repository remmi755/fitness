import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import '@fontsource/roboto/500.css'
import { List, ListItem, SvgIcon} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeIcon from '@mui/icons-material/Mode';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import NotificationsIcon from '@mui/icons-material/Notifications';



const repairsName = [
    {title:'Назва ремонту', isDisabled: false, isNoMaster: true, isTimeout:true, isWarning: true, isYours:false},
    {title:'Назва ремонту', isDisabled: false, isNoMaster: false, isTimeout:true, isWarning: false, isYours:true},
    {title:'Назва ремонту', isDisabled: false, isNoMaster: true, isTimeout:true, isWarning: false, isYours:false},
    {title:'Назва ремонту', isDisabled: true, isNoMaster: false, isTimeout:true, isWarning: false, isYours:false},
    {title:'Назва ремонту', isDisabled: false, isNoMaster: false, isTimeout:true, isWarning: true, isYours:false},
    {title:'Назва ремонту', isDisabled: false, isNoMaster: false, isTimeout:true, isWarning: true, isYours:false},
    {title:'Назва ремонту', isDisabled: false, isNoMaster: false, isTimeout:true, isWarning: true, isYours:false},
    {title:'Назва ремонту', isDisabled: false, isNoMaster: true, isTimeout:true, isWarning: true, isYours:false},
    {title:'Назва ремонту', isDisabled: false, isNoMaster: false, isTimeout:true, isWarning: false, isYours:true},
    {title:'Назва ремонту', isDisabled: false, isNoMaster: true, isTimeout:true, isWarning: false, isYours:false},
    {title:'Назва ремонту', isDisabled: true, isNoMaster: false, isTimeout:true, isWarning: false, isYours:false},
]
const options = ['UAH', 'USD', 'EUR', 'RUB']
const statusRepairs = ['ОЧІКУЮТЬ', 'В РЕМОНТІ', 'ГОТОВО'];
const Sidebar = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const [active, setActive] = React.useState(0);

    const statusRepairsHandler = (repair) => {
        if (repair.isWarning) {
            return 'rgba(211,47,47,1)'
        } else if (repair.isYours) {
            return 'rgba(33,150,243,1)'
        }  else if (repair.isNoMaster) {
            return 'rgba(0,0,0,1)'
        } else if (repair.isDisabled) {
            return 'rgba(216,216,216,1)'
        }
    }

    const loaderSx = {
        marginTop: 'calc(50% - 1.1em)',
        left :' calc(50% - 1.1em)',
        width: '2.2em',
        height: '2.2em',
        display: 'block',
        position: ' relative',
        animation: 'spinRing 1500ms linear infinite',
        '&::after': {
            content: `''`,
            position: ' absolute',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            margin: 'auto',
            height: 'auto',
            width: ' auto',
            border: '2px solid rgba(114, 114, 114, 1)',
            borderRadius: '50%',
            clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 80%)',
            animation: 'spinRingInner 1500ms  cubic - bezier(0.770, 0.000, 0.175, 1.000) infinite',
        },
        "@keyframes spinRing": {
            "0%": {
                transform: 'rotate(0deg)',
            },
            "100%": {
                transform: 'rotate(360deg)',
            }
        },
        "@keyframes spinRingInner": {
            "0%": {
                transform: 'rotate(-180deg)',
            },
            "50%": {
                transform: 'rotate(-160deg)',
            },
            "100%": {
                transform: 'rotate(180deg)',
            }
        }
    }

    return (

        <div className="size-full mx-auto">
            <Box sx={{flexGrow: 1, width: '100%', height: '100%'}}>
                <AppBar position="static">
                    <Toolbar className="flex justify-between">
                        <Box className="flex items-center gap-2">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{mr: 2}}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                BikeLove
                            </Typography>
                        </Box>

                        {/*Select*/}

                        <Button color="inherit" className="flex justify-between gap-4">
                            <Typography variant="h6" component="div" className="normal-case grow">
                                Панкратов Євген
                            </Typography>
                            <NotificationsIcon/>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className="flex gap-5">
                <div className="pl-5 py-4 w-[328px] h-[calc(100vh-190px)]">
                    <div className="flex items-center justify-between gap-2">
                        <ul className="flex gap-4 pl-0 my-0">
                            {statusRepairs.map((status, index) => (
                                <li key={index}
                                    className={`list-none text-[14px] text-center min-w-[79px] text-[rgba(0,0,0,0.6)] leading-[42px] font-medium  ${active === index ? 'text-[rgba(33,150,243,1)] border-0 border-b-2 border-solid  border-[rgba(33,150,243,1)]' : ''}`}
                                    onClick={() => setActive(index)}>{status}</li>
                            ))}
                        </ul>
                        <Button className="min-w-12 h-12 p-0 bg-[rgba(0,153,61,1)] hover:bg-[rgba(0,153,61,1)]"
                                size="small"
                                variant="contained"><AddIcon/></Button>
                    </div>

                    {isLoading ? <Box sx={loaderSx}></Box> : (
                        <List className="flex flex-col gap-1 h-full mt-5 pl-0 py-0 overflow-y-auto">
                            {
                                repairsName.map((repair, index) => (
                                    <ListItem key={index}
                                              sx={{
                                                  fill: statusRepairsHandler(repair),
                                                  color: statusRepairsHandler(repair),
                                                  border: statusRepairsHandler(repair),
                                                  text: statusRepairsHandler(repair),
                                              }}
                                              className={`flex justify-between items-center gap-2 pl-[10px] pr-0 py-1 border hover:border-solid rounded cursor-pointer`}>
                                        <button
                                            className="p-0 text-inherit flex items-center gap-1 rounded-xl border-0 bg-transparent border-inherit">
                                            <Typography
                                                className="rounded-xl text-inherit border border-solid border-inherit w-[41px] text-[13px] leading-[18px] py-[2px]">
                                                134
                                            </Typography>
                                            {repair.isYours && <ModeIcon className="fill-inherit"/>}
                                            {repair.isTimeout && <AccessTimeFilledIcon className="fill-inherit"/>}
                                            {repair.isNoMaster && <PersonOffIcon className="fill-inherit"/>}
                                        </button>
                                        <span className="grow text-sm leading-4 font-normal">{repair.title}</span>
                                        <button
                                            className="w-10 h-10 flex items-center justify-center border-0 bg-transparent ">
                                            <MoreVertIcon className="fill-inherit"/>
                                        </button>
                                    </ListItem>
                                ))
                            }
                        </List>)}
                </div>


                <div className="flex items-center justify-center gap-[14px] w-full">
                    <SvgIcon className="h-12 w-12">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="#EDF2FE"/>
                            <path
                                d="M36.9466 35.0534L35.0533 36.9467C34.8034 37.1951 34.4655 37.3345 34.1133 37.3345C33.761 37.3345 33.4231 37.1951 33.1733 36.9467L17.3333 21.1334C16.8997 21.259 16.4513 21.3263 15.9999 21.3334C15.151 21.3328 14.3145 21.1296 13.5599 20.7406C12.8053 20.3516 12.1545 19.7881 11.6616 19.0969C11.1687 18.4058 10.8478 17.6069 10.7258 16.7668C10.6037 15.9267 10.684 15.0696 10.9599 14.2667L14.3466 17.6534L15.0533 16.9467L16.9466 15.0534L17.6533 14.3467L14.2666 10.9601C15.0694 10.6842 15.9265 10.6039 16.7666 10.726C17.6068 10.848 18.4056 11.1688 19.0968 11.6618C19.7879 12.1547 20.3514 12.8055 20.7404 13.5601C21.1294 14.3146 21.3326 15.1512 21.3333 16.0001C21.3261 16.4514 21.2589 16.8998 21.1333 17.3334L36.9466 33.1734C37.1949 33.4232 37.3343 33.7612 37.3343 34.1134C37.3343 34.4657 37.1949 34.8036 36.9466 35.0534ZM11.0533 33.1734C10.8049 33.4232 10.6655 33.7612 10.6655 34.1134C10.6655 34.4657 10.8049 34.8036 11.0533 35.0534L12.9466 36.9467C13.1964 37.1951 13.5343 37.3345 13.8866 37.3345C14.2388 37.3345 14.5768 37.1951 14.8266 36.9467L22.1199 29.6667L18.3466 25.8934M34.6666 10.6667L29.3333 13.3334V16.0001L26.4399 18.8934L29.1066 21.5601L31.9999 18.6667H34.6666L37.3333 13.3334L34.6666 10.6667Z"
                                fill="#2196F3"/>
                        </svg>
                    </SvgIcon>
                    <div className="flex flex-col justify-between h-12">
                        <span className="text-lg leading-[22px] font-bold ">Ремонт не обрано</span>
                        <span className="text-sm leading-[17px] font-normal ">Будь-ласка, оберіть ремонт!</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;
