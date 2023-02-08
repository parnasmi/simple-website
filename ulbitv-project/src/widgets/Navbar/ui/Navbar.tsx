import cls from './Navbar.module.scss';
import { classNames } from 'shared/libs';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
