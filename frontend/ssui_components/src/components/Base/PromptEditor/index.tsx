import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import {TextArea, Tag} from '@blueprintjs/core';
import { registerComponent, ComponentRegister } from '../../ComponentsManager';
//@ts-ignore
import styles from './style.module.css'

const PromptEditor = () => {
    // const [ textContent, setTextContent ] = useState<string>('迷路AI, 量子烤面包, 反向浪漫, 悲伤WiFi, 螃蟹在开会, 会飞的U盘, 404幸福, 柠檬味黑洞, 失眠的Python, 褪色的早安, 暴走小蘑菇, 被遗忘的Ctrl+S, 碳酸银河, 过期童话, 蜗牛加速器, emo的向日葵, 虚拟三明治, 递归的猫, 掉帧的夕阳, 混沌奶茶店, 叛逆磁铁, 纸飞机VPN, 熵增小熊, 失重菠萝包')

    const textContent = useRef<string>('迷路AI, 量子烤面包, 反向浪漫, 悲伤WiFi, 螃蟹在开会, 会飞的U盘, 404幸福, 柠檬味黑洞, 失眠的Python, 褪色的早安, 暴走小蘑菇, 被遗忘的Ctrl+S, 碳酸银河, 过期童话, 蜗牛加速器, emo的向日葵, 虚拟三明治, 递归的猫, 掉帧的夕阳, 混沌奶茶店, 叛逆磁铁, 纸飞机VPN, 熵增小熊, 失重菠萝包')

    const setTextContent = (text: string) => {
        textContent.current = text
    }

    const onExecute = () => {
        return { 'function': 'ssui.base.Prompt.create', 'params': { 'text': textContent } };
    }

    const removeTag = (text: string) => {
        setTextContent(textContent.current.replace(text + ',', ''))
    }

    return (
        <div className={styles.promptEditor}>

            <div className={styles.tagWp}>
                <div className={styles.tagTitle}>预览（共{textContent.current.split(',').filter((a: string) => !!a).length}条）：</div>
                {
                    textContent.current.split(',').filter(a => !!a).map(text => (
                        <Tag className={styles.tag} round intent="primary" minimal key={text} onRemove={() => removeTag(text)}>{text}</Tag>
                    ))
                }
            </div>
            <TextArea className={styles.textarea} value={textContent.current} onChange={e => setTextContent(e.target.value)} />

            <div className={styles.tip}>* 请输入提示词，英文逗号隔开。</div>
        </div>
    )
}


[
    { 'name': 'PromptEditor', 'type': 'ssui.base.Prompt', 'port': 'input', 'component': PromptEditor } as ComponentRegister,
].forEach(registerComponent);


