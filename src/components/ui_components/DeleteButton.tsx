import { Button, Dialog, DialogPanel } from '@tremor/react';
import React from 'react';

export function DeleteButtonDialogue() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Button className="mx-2" color='red' onClick={() => setIsOpen(true)}> Delete </Button>
            <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
                <DialogPanel>
                    <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong"> Permanently Delete Admin? </h3>
                    <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        Warning! Deleting will permanently remove this user from the database and will be unable to use nor access the WYNIM CRM System
                    </p>
                    <div className="flex justify-end mt-8 space-x-4">
                        <Button onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button color="red" onClick={() => {
                            // Add your delete logic here
                            setIsOpen(false);
                        }}>
                            Proceed
                        </Button>
                    </div>
                </DialogPanel>
            </Dialog>
        </>
    );
}