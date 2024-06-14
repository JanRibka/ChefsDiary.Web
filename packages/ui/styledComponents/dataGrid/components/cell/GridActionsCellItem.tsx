import { forwardRef, ReactElement } from 'react';

export type GridActionsCellItemProps = {
  label: string;
  icon?: ReactElement;
} & (
  | ({ showInMenu?: false; icon: ReactElement } & IconButtonProps)
  | ({ showInMenu: true } & MenuItemProps)
);

const GridActionsCellItem = forwardRef<HTMLButtonElement, GridActionsCellItemProps>(
  (props, ref) => {
    const { label, icon, showInMenu, onClick, ...other } = props;

    const handleClick = (event: any) => {
      if (onClick) {
        onClick(event);
      }
    };

    if (!showInMenu) {
      return (
        <IconButton
          ref={ref}
          size="small"
          role="menuitem"
          aria-label={label}
          {...(other as any)}
          onClick={handleClick}
        >
          {.cloneElement(icon!, { fontSize: 'small' })}
        </IconButton>
      );
    }

    return (
      <MenuItem ref={ref} {...(other as any)} onClick={onClick}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        {label}
      </MenuItem>
    );
  },
);


export { GridActionsCellItem };
