// vscode install ES7 React 插件 然后压 ra开头的 可以选择代码片段 rafce即为函数组件
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title,onAdd,showAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button handleClick = {onAdd} color={showAdd?'red':'blue'} text={showAdd?'Cancel':'ADD'}/>
        </header>
    )
}
Header.defaultProps = {//默认参数
    title : 'Task Tracker',
}
Header.propTypes = {//类型约束 传入的参数必须为字符串类型且必传 否则会出现console里会出现警告
    title : PropTypes.string.isRequired,
}

export default Header
